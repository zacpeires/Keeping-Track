const router = require('express').Router();
const leapYear = require('leap-year');
const { User, Calendar, Month } = require('../db/models');
const createMonthsOfTheYear = require('./dataAndFunctions/monthsData');
module.exports = router;

router.get('/me', (req, res, next) => {
  res.json(req.user);
});

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    let date = new Date();
    let year = date.getFullYear();

    const calendar = await Calendar.create({ year: year, current: true });

    await calendar.addNewUser(newUser);

    let monthsOfTheYear = createMonthsOfTheYear(leapYear);

    monthsOfTheYear.forEach(async (month) => {
      let isCurrent = false;

      if (month.numberInYear === new Date().getMonth + 1) {
        isCurrent = true;
      }

      let newMonth = await Month.create({
        name: month.name,
        numberInYear: month.numberInYear,
        numberOfDays: month.numberOfDays,
            current: isCurrent
      });

      calendar.addNewMonth(newMonth);
    });

    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      },
      include: [{ model: Calendar }]
    });

    if (!user) {
      res.status(401).send('User not found');
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Incorrect password');
    } else {
      req.login(user, errr => {
        if (err) next(err);
        else res.json(user);
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete('/logout', (req, res, next) => {
  req.logout();
  res.session.destroy();
  res.sendStatus(204);
});

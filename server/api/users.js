const router = require('express').Router();
const leapYear = require('leap-year');
const { User, SingleDate } = require('../db/models');
const { createMonthsOfTheYear, createDaysOfTheWeek } = require('./dataAndFunctions');
const moment = require('moment')
module.exports = router;

router.get('/me', (req, res, next) => {
  res.json(req.user);
});

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    let date = new Date();
    let year = date.getFullYear();;

    let monthsOfTheYear = createMonthsOfTheYear(leapYear);

    monthsOfTheYear.forEach(async (month) => {
      let monthName = month.name

      for (let i = 1; i <= month.numberOfDays; i++) {
        let dayOfTheWeek = new Date(`${month.name}, ${i}`).getDay()
        const day = createDaysOfTheWeek(dayOfTheWeek)
        const date = `${i}/${month.numberInYear}/${year}`
        let current = false
        let hasPassed;

  // fix hasPassed
  // add dates to user
  // moment isn't working - isn't working out what correct date is. Switch to date.now


        if (moment(date).isSame(Date.now(), 'day')) {
          current = true
        }

        const newDate = await SingleDate.create({
          date: date,
          month: month.name,
          dayOfTheWeek: day,
          current: current
        })

        await newDate.setUser(newUser)
      }
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
      include: [{ model: SingleDate }]
    });

    // sort out eager loading

    if (!user) {
      res.status(401).send('User not found');
    } else if (!user.correctPassword(req.body.password)) {
      res.status(401).send('Incorrect password');
    } else {
      req.login(user, err => {
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

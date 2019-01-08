const router = require('express').Router();
const leapYear = require('leap-year');
const { User, Calendar, Month, Day } = require('../db/models');
const { createMonthsOfTheYear, createDaysOfTheWeek } = require('./dataAndFunctions');
const moment = require('moment')
module.exports = router;

router.get('/me', (req, res, next) => {
  res.json(req.user);
});

router.post('/signup', async (req, res, next) => {
  try {
    console.log('hello')

    const newUser = await User.create(req.body);
    let date = new Date();
    let year = date.getFullYear();

    const calendar = await Calendar.create({ year: year, current: true });

    await newUser.addCalendar(calendar);

    let monthsOfTheYear = createMonthsOfTheYear(leapYear);

    monthsOfTheYear.forEach(async (month) => {
      let isCurrent = false;
      let hasPassed;
      let monthName = month.name
      const currentMonth = new Date().getMonth + 1;

      if (month.numberInYear === currentMonth) {
        isCurrent = true;
      }

      if (month.numberInYear < currentMonth) {
        hasPassed = false;
      } else {
        hasPassed = true;
      }

      let newMonth = await Month.create({
        name: monthName,
        numberInYear: month.numberInYear,
        numberOfDays: month.numberOfDays,
        current: isCurrent,
        hasPassed: hasPassed
      });

      for (let i = 0; i < month.numberOfDays; i++) {
        let dayOfTheWeek = new Date(`${month.name}, ${i}`).getDay()
        const day = createDaysOfTheWeek(dayOfTheWeek)
        const date = `${i}/${month.numberInYear}/${year}`
        let current = false

        if (moment(date).isSame(Date.now(), 'day')) {
          current = true
        }

        day.date = date
        day.current = current

        const newDay = await Day.create(day)

       await newMonth.addDay(newDay)
      }

     await calendar.addMonth(newMonth);
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

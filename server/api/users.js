const router = require('express').Router()
const { User } = require('../db/models')
module.exports = router


router.get('/me', (req, res, next) => {
  res.json(req.user);
})

router.post('/signup', async (req, res, next) => {
  try {

    const newUser = await User.create(req.body)
    res.json(newUser)

  } catch (error) {
    next(error)
  }
})


router.put('/login', async (req, res, next) => {
try {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })

  if (!user) {
    res.status(401).send('User not found')
  } else if (!user.correctPassword(req.body.password)) {
    res.status(401).send('Incorrect password')
  } else {
    req.login(user, errr => {
      if (err) next(err);
      else res.json(user);
    })
  }

} catch(error) {
  next(error) }
})


router.delete('/logout', (req, res, next) => {
  req.logout();
  res.session.destroy();
  res.sendStatus(204)
})

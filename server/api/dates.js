const router = require('express').Router();
const { SingleDate } = require('../db/models');
module.exports = router;


router.get('/calendar/:userId', async (req, res , next) => {
    try {
        const userDates = await SingleDate.findAll({
            where: {
                userId: req.params.userId
            }
        })

        res.json(userDates)


    } catch(error) {next(error)}
})
const router = require('express').Router();
const { Month, SingleDate } = require ('../db/models')
module.exports = router;

router.get('/calendar/:userId', async (req, res, next) => {
    try {

        const userMonths = await Month.findAll({
            where: {
                userId: req.params.userId
            },
            include: [{model: SingleDate}]
        })

        res.json(userMonths)


    } catch(error) {next(error)}
})
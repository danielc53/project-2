const { Router } = require('express');
const router = Router();
const user = require('../../models/User')

router.post('/register', async (req, res) => {
    const newUser = req.body;
    console.log('new user', newUser)
    const dbUser = await user.create(newUser)
    res.send({
        message: 'new user created successfully',
        post: dbUser
    })
});


module.exports = router

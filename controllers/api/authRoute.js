const { Router } = require('express');
const router = Router();
const user = require('../../models/User')

router.post('/register', async (req, res) => {
    const newUser = req.body;
    console.log('new user', newUser)
    const dbUser = await user.create(newUser)
    res.send({
        message: 'new user created successfully',
        user: dbUser
    })
});

router.post('/login', async (req, res) => {
    const loginUser = req.body;
    console.log('new user', loginUser)
    const dbUser = await user.findOne({
        where: {
            username: loginUser.username
        }
    })
    if (!dbUser) {
        return res.send({ message: 'User not found' })
    };
    const passwordCorrect = dbUser.checkPassword(req.body.password)
    if (!passwordCorrect) {
        return res.send({ message: 'Password is not correct.' })
    }
    res.send({
        successful: true,
        message: 'User logged in successfully',
        user: dbUser
    })
});


module.exports = router
const { Router } = require('express');
const router = Router();
const post = require('./Post')

router.post('/', async (req, res) => {
    const newPost = req.body;
    const dbPost = await post.create(newPost)
    res.send({
        message: 'post created successfully',
        post: dbPost
    })
});

post.create

module.exports = router
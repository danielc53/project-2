const { Router } = require('express');
const router = Router();

router.post('/', async (req, res) => {
    const newPost = req.body;
    const dbPost = await post.create(newPost)
    res.send({
        message: 'post created successfully',
        post: dbPost
    })
});


module.exports = router
const router = require('express').Router();
const gameRoutes = require('./gameRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/games', gameRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
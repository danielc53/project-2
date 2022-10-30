const router = require('express').Router();
const gameRoutes = require('./gameRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoute');

router.use('/games', gameRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;

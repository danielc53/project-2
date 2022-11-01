const router = require('express').Router();
const gameRoutes = require('../homeRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const authRoute = require('./authRoute');
//const hndlbarRoutes = require('./handlebarsRoutes')

router.use('/games', gameRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/auth', authRoute);
//router.use('/handlebarsRoutes', hndlbarRoutes);

module.exports = router;

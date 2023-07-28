const router = require('express').Router();

const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/recipe', recipeRoutes);

module.exports = router;

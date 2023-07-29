const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const commentRoutes = require('./commentRoutes');
// const recipeRoutes = require('./recipeRoutes');

router.use('/users', userRoutes);
// router.use('/comments', commentRoutes);
// router.use('/recipe', recipeRoutes);

module.exports = router;

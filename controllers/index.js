const router = require('express').Router();

const userRoutes = require('./userRoutes');

const apiRoutes = require('./api');
const recipeRoutes = require('./recipeRoutes');

router.use('/users', userRoutes);
router.use('/recipeRoutes', projectRoutes);

module.exports = router;
const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const userRoutes = require('./userRoutes');

const apiRoutes = require('./api');

router.use('/users', userRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes); 

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes); 

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;
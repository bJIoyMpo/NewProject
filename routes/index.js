const router = require('express-promise-router')();

router.use('/user', require('./userRoutes'));

module.exports = router;
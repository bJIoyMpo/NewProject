const router = require('express-promise-router')();
const userOperation = require('../controllers/userController');

router.post('/signup', userOperation.signUp);
router.post('/signin', userOperation.signIn);

module.exports = router;
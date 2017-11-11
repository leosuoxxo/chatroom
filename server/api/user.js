const router = require('koa-router')();
const userctrl = require('../controllers/users/UserController');

router
  .post('/login', userctrl.login)
  .post('/register', userctrl.register);

module.exports = router;

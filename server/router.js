const router = require('koa-router')();
const userctrl = require('./controllers/users/UserController');

router
  .post('/api/login', userctrl.login)
  .post('/api/register', userctrl.register);

module.exports = router;

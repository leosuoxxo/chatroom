
const router = require('koa-router')();
const userctrl = require('./controllers/users/UserController');


router.post('/api/login', userctrl.login);


module.exports = router;

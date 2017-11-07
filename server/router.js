
const router = require('koa-router')();

const user = router.get('/api/login', async (ctx) => {
  console.log(ctx.Name);
});

module.exports = user;

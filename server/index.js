const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const serve = require('koa-static');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

app.use(serve(path.join(__dirname, '../dist')));

app.use(views(path.join(__dirname, '../dist'), {
  extension: 'html'
}));

router.get('/api/colorlist', async (ctx) => {
  console.log('123');
  ctx.body = {
    name: 123
  };
});

app.use(router.routes());

app.use(async (ctx) => {
  if (ctx.url.indexOf('api') < 0) {
    await ctx.render('index.html');
  }
});

app.listen(8080);

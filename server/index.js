require('./db');
const Koa = require('koa');
const router = require('./router');
const views = require('koa-views');
const path = require('path');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const json = require('koa-json');
const resformat = require('./middlewares/resformat');

const app = new Koa();
app.use(logger());
app.use(json());
app.use(bodyParser());

app.use(serve(path.join(__dirname, '../dist')));

app.use(views(path.join(__dirname, '../dist'), {
  extension: 'html'
}));


app.use(resformat('^/api'));

app.use(router.routes()).use(router.allowedMethods());


app.use(async (ctx, next) => {
  if (ctx.url.indexOf('api') < 0) {
    await ctx.render('index.html');
  }
  next();
});
app.listen(8080);

require('./db');
const Koa = require('koa');
const router = require('./router');
const views = require('koa-views');
const path = require('path');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');


const app = new Koa();

app.use(logger());
app.use(bodyParser());

// const server = require('http').Server(app.callback());
// const io = require('socket.io')(server);

app.use(serve(path.join(__dirname, '../dist')));

app.use(views(path.join(__dirname, '../dist'), {
  extension: 'html'
}));

app.use((ctx, next) => {
  console.log(ctx);
  ctx.render('index.html');
  return next();
});

// app.use(router.routes()).use(router.allowedMethods());
app.use(router.routes());


// app.use(async (ctx) => {
//   if (ctx.url.indexOf('api') < 0) {
//     await ctx.render('index.html');
//   }
// });

app.listen(8080);

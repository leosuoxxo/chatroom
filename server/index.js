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
const cors = require('koa2-cors');
// const jwt = require('jsonwebtoken');
// const jwtKoa = require('koa-jwt');

// const secret = 'just talk';

const app = new Koa();


app.use(logger());
app.use(json());
app.use(bodyParser());
app.use(cors({
  origin(ctx) {
    if (ctx.url === '/test') {
      return '*'; // 允许来自所有域名
    }
    return 'http://localhost:8000'; // 只允许 http://localhost:8080 这个域名的请求了
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// app.use(jwtKoa({ secret, passthrough: true }));
// .unless({
//   path: [/^\/api\/login/, /^\/api\/register/] // 数组中的路径不需要通过jwt验证
// }));


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

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx);
});

app.listen(8080);

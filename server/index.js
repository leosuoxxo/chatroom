const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(path.join(__dirname, '../dist')));

app.use(views(path.join(__dirname, '../dist'), {
  extension: 'html'
}));


app.use(async (ctx) => {
  await ctx.render('index.html');
});

app.listen(8080);

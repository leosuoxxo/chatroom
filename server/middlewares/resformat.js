
import ApiError, { ERROR } from '../error/ApiError';


const resformat = (ctx) => {
  if (ctx.body) {
    ctx.body = {
      ok: true,
      msg: 'success',
      result: ctx.body
    };
  } else {
    ctx.body = {
      ok: true,
      msg: 'success'
    };
  }
};

const filter = pattern => async (ctx, next) => {
  const reg = new RegExp(pattern);
  try {
    await next();
    if (reg.test(ctx.originalUrl)) {
      resformat(ctx);
    }
  } catch (err) {
    let status;
    switch (err.type) {
    case ERROR.FORMAT_INVALID:
    case ERROR.DATA_EXISTED:
    case ERROR.DATA_INVALID:
      status = 400;
      break;
    case ERROR.LOGIN_REQUIRED:
      status = 401;
      break;
    case ERROR.PERMISSION_DENIED:
      status = 403;
      break;
    case ERROR.DATA_NOT_FOUND:
      status = 404;
      break;
    default:
      status = 500;
    }
    ctx.status = status;
    ctx.body = err;
    ctx.body = {
      ok: false,
      msg: err
    };
  }
};


module.exports = filter;

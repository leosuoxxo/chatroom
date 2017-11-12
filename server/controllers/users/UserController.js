// import md5 from 'md5';
const ApiError = require('../../error/ApiError');
const ApiErrorNames = require('../../error/ApiErrorNames');
const UserModel = require('../../models/user');
const jwt = require('jsonwebtoken');
// const util = require('util');

// const verify = util.promisify(jwt.verify); // 解密

const secret = 'just talk';


class UserController {
  static async checkLogin(ctx) {
    const token = ctx.cookies.get('user-token');
    console.log(token);
    // const token = ctx.header.authorization;
    let payload;
    if (token) {
      payload = await jwt.verify(token, secret); // // 解密，获取payload
      ctx.body = {
        Account: payload.Account,
        Nickname: payload.Nickname,
        Avatar: payload.Avatar
      };
    } else {
      ctx.state.error = true;
      ctx.body = new ApiError(ApiErrorNames.USER_NOT_LOGIN);
    }
  }
  // 用户登入
  static async login(ctx) {
    const req = {
      Account: ctx.request.body.account,
      Password: ctx.request.body.password
    };
    await UserModel.findOne({ Account: req.Account }, (err, user) => {
      console.log(user, 'user', 'Password', req.Password);
      if (user || user.Account) {
        if (user.Password === req.Password) {
          const token = jwt.sign({
            Account: user.Account,
            Nickname: user.Nickname,
            Avatar: user.Avatar
          }, secret, { expiresIn: Date.now() + (10 * 60 * 1000) });
          ctx.body = {
            Account: user.Account,
            Nickname: user.Nickname,
            Avatar: user.Avatar
          };
          ctx.cookies.set(
            'user-token',
            token,
            {
              domain: 'localhost', // 写cookie所在的域名
              path: '/', // 写cookie所在的路径
              maxAge: 10 * 60 * 1000, // cookie有效时长
              expires: Date.now() + (10 * 60 * 1000), // cookie失效时间
              httpOnly: false, // 是否只用于http请求中获取
              overwrite: false // 是否允许重写
            }
          );
        } else {
          ctx.state.error = true;
          ctx.body = new ApiError(ApiErrorNames.USER_WRONG_PASSWORD);
        }
      } else {
        ctx.state.error = true;
        ctx.body = new ApiError(ApiErrorNames.USER_NOT_EXIST);
      }
    });
  }
  static async register(ctx) {
    const req = {
      Account: ctx.request.body.account,
      Password: ctx.request.body.password,
      Nickname: ctx.request.body.nickname,
      Avatar: '/'
    };
    const Checker = await UserModel.find({ Account: req.Account, Nickname: req.Nickname }, async (err, checker) => (
      checker
    ));
    if (Checker.length > 0 && Checker) {
      console.log(Checker, 'checker');
      ctx.body = new ApiError(ApiErrorNames.USER_IS_EXIST);
      ctx.state.error = true;
    } else {
      const User = await new UserModel(req).save();
      await UserModel.findOne(User, (error, user) => {
        ctx.body = {
          Account: user.Account,
          Nickname: user.Nickname,
          Avatar: user.user
        };
        console.log(ctx.body, 'ctx.body');
      });
    }
  }
  static async logout(ctx) {
    ctx.cookies.set('user-token', null);
  }
}

module.exports = UserController;

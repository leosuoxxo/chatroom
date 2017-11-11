// import md5 from 'md5';
const UserModel = require('../../models/user');

class UserController {
  static async userInfo(ctx) {
    UserModel.find({ Account: ctx.request.body.account }, (err, doc) => {
      if (err) {
        throw err;
      }
      ctx.body = doc;
    });
  }
  // 用户登入
  static async login(ctx) {
    // const req = {
    //   Account: ctx.request.body.account,
    //   Password: ctx.request.body.password
    // };
    await UserModel.find({}, (err, user) => {
      if (err) { throw err; }
      ctx.body = {
        Account: user.Account,
        Nickname: user.Nickname,
        Avatar: user.Avatar
      };
    });
  }
  static async register(ctx) {
    const req = {
      Account: ctx.request.body.account,
      Password: ctx.request.body.password,
      Nickname: ctx.request.body.nickname
    };
    const User = await new UserModel(req).save();
    await UserModel.findOne(User, (err, user) => {
      if (err) {
        throw err;
      }
      ctx.body = {
        Account: user.Account,
        Nickname: user.Nickname,
        Avatar: user.Avatar
      };
    });
  }
}

module.exports = UserController;

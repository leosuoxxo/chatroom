// import md5 from 'md5';
const UserModel = require('../../models/user.js');

class UserController {
  // 用户登入
  static async login(ctx) {
    await UserModel.find({ Nickname: 'Leo0' }, (err, doc) => {
      if (err) {
        throw err;
      }
      ctx.body = doc;
    });
  }
  static async register(ctx) {
    await UserModel.find({}, (err, user) => {
      if (err) {
        throw err;
      }
      ctx.body = user;
    });
  }
}

module.exports = UserController;

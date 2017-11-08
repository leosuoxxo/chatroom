// import md5 from 'md5';
const UserModel = require('../../models/user.js');

class UserController {
  // 用户登入
  static async login(ctx) {
    // await UserModel.find({ Nickname: 'Leo' }, (err) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log(ctx.body);
    // });
    console.log(123);
  }
}

module.exports = UserController;

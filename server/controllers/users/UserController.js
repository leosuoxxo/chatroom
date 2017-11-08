const mongoose = require('mongoose');
// import md5 from 'md5';
require('models/user.js');

const UserModel = mongoose.model('User');
// const UserModel =
// require('models/user.js');

class UserController {
  // 用户登入
  // static async login(ctx) {
  // await UserModel.find({ Nickname: 'Leo' }, (err) => {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(ctx.body);
  // });
  // }
}

module.exports = UserController;

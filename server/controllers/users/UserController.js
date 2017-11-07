import mongoose from 'mongoose';
import md5 from 'md5';
const UserModel = mongoose.model('User');

class UserController {

  // 用户注册
   async register(ctx) {
      // await ……
   }

  // 用户登录
  async login(ctx) {
   // await ……
  }

   // 用户退出
  async logout(ctx) {
   // await ……
  }

  // 更新用户资料
  async put(ctx) {
   // await ……
  }

  // 删除用户
  async deluser(ctx) {
   // await ……
  }

 // 重置密码
  async resetpwd(ctx) {
   // await ……
  }

  ……

}
export default new UserController();

作者：sessionboy
鏈接：http://www.jianshu.com/p/f59594b90500
來源：簡書
著作權歸作者所有。商業轉載請聯繫作者獲得授權，非商業轉載請註明出處。

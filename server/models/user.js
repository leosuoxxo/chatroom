const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  Account: {
    type: String,
    unique: true,
    require: true
  },
  Password: {
    type: String,
    require: true
  },
  Nickname: {
    type: String,
    unique: true
  },
  Avatar: {
    type: String,
    dafault: '',
    unique: true
  },
  createTime: {
    type: Date,
    dafault: Date.now()
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

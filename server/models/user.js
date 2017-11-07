const mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
  Account: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  Nickname: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('User', UserSchema);
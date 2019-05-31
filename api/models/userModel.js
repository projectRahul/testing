'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {type: String},
  mobile: {type: String},
  email: {type: String},
  password: {type: String},
  status: {type: Number,default: '1'},
});

module.exports = mongoose.model('login_record', UserSchema);



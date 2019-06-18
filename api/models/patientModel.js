'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PatientSchema = new Schema({
  name: {type: String, default : null},
  mobile: {type: String, default : null},
  email: {type: String, default : null},
  dob: {type: String, default : null},
  address: {type: String, default : ''},
  image: {type: String,default: ''},
  unique_num: {type: Number,unique: true},
  updated_at: {type: String, default: new Date()},
  created_at: {type: String, default: new Date()},
  valid_token: {type: String, default: null},
});

module.exports = mongoose.model('patient', PatientSchema);

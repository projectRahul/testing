'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PatientSchema = new Schema({
  name: {type: String},
  mobile: {type: String},
  email: {type: String},
  dob: {type: String},
  address: {type: String},
  image: {type: String},
  unique_no: {type: Number,default: ''},
});

module.exports = mongoose.model('patient', PatientSchema);
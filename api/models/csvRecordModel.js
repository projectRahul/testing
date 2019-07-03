'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var csvRecordSchema = new Schema({
  name: {type: String},
  mobile: {type: String},
  email: {type: String},
  dob: {type: String}
});

module.exports = mongoose.model('csv_record', csvRecordSchema);
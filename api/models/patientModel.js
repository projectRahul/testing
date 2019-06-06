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




// var PatientMedicationSchema = new Schema({
//   unique_num: {type: String},
//   drug: {type: String},
//   dose: {type: String},
//   strength: {type: String},
//   report_date: {type: String},
// });

// module.exports = mongoose.model('medication', PatientMedicationSchema);
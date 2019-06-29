'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PatientMedicationAccSchema = new Schema({
  unique_num: {type: String},
  drug: {type: String},
  dose: {type: String},
  strength: {type: String},
  report_date: {type: String},
});

module.exports = mongoose.model('medication_accordians', PatientMedicationAccSchema);
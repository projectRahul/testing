'use strict';

var mongoose = require('mongoose'),
Patient = mongoose.model('patient');
// PatientMedication = mongoose.model('medication');
// User = mongoose.model('login_record','patient');

exports.searchPatient = function(req, res) {
  var searchArray = new Object();
  searchArray[req.body.searchwith] = req.body.searchValue;
  Patient.find(searchArray, function(err, patient_data) {
    if (err)
      res.send(err);
    res.json(patient_data);
  });
};


exports.getPatientDetails = function(req, res) {
  Patient.find(req.body, function(err, patient_data) {
    if (err)
      res.send(err);
    res.json(patient_data);
  });
};


// exports.getPatientMedicationDetails = function(req, res) {
//   res.json(req.body);
  // PatientMedication.find(req.body, function(err, medication_data) {
  //   if (err)
  //     res.send(err);
  //   res.json(medication_data);
  // });
// };

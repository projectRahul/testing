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


exports.addNewPatient = function(req, res, next) {
  console.log(req.file);
  res.json(req.params);
  // var new_patient = new Patient(req.body);
  
  // Patient.find({"unique_num" : req.body.unique_num}, function(err, patient_data) {
  //   if (err)
  //     res.send(err);
  //   if(patient_data.length != 0){
  //     res.json({"status":"0"});
  //   }else{
  //     new_patient.save(function(err, patient_data) {
  //       res.json({"status":"1"});
  //     });
  //   }
  // });
};

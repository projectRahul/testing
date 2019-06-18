'use strict';

var mongoose = require('mongoose'),
Patient = mongoose.model('patient');

exports.searchPatient = function(req, res) {
  var searchArray = new Object();
  searchArray[req.body.searchwith] = req.body.searchValue;
  
  Patient.find(searchArray).then(function(patient_data) {
    if (patient_data == '' || patient_data == null){
      res.json({status : false , message : 'No patient Found'});
    }else{      
      res.json({status : true , message : 'Records found' , data : patient_data});
    }
  }).catch(function(error){
    res.json({status : false , message : 'No patient Found' , error : error});
  });
};


exports.getPatientDetails = function(req, res) {
  Patient.find(req.body).then(function(patient_data) {
    if (patient_data == '' || patient_data == null){
      res.json({status : false , message : 'No Information Available'});
    }else{      
      res.json({status : true , message : 'Records found' , data : patient_data});
    }
  }).catch(function(error){
    res.json({status : false , message : 'No patient Found' , error : error});
  });
};


// exports.addNewPatient = function(req, res, next) {
//   console.log(req.file);
//   res.json(req.params);
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
// };

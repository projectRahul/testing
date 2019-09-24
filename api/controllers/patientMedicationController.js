'use strict';

var patient = require('./patientController');
var mongoose = require('mongoose'),
Patient = mongoose.model('patient'),
PatientMedication = mongoose.model('medication');

exports.getPatientMedicationDetails = function(req, res) {
  PatientMedication.find(req.body).then(function(medication_data) {
    if (medication_data == '' || medication_data == null){
      res.json({status : false , message : 'No Medication Records Found'});
    }else{      
      res.json({status : true , message : 'Records found' , data : medication_data});
    }
  }).catch(function(error){
  	res.json({status : false , message : 'No Medication Records Found' , error : error});
  });
};

exports.getDrugDropdown = function(req, res) {
  PatientMedication.distinct('drug',req.body).then(function(medication_data) {
    if (medication_data == '' || medication_data == null){
      res.json({status : false , message : 'No Medication Records Found'});
    }else{      
      res.json({status : true , message : 'Records found' , data : medication_data});
    }
  }).catch(function(error){
  	res.json({status : false , message : 'No Medication Records Found' , error : error});
  });
};

exports.addNewMedication = function(req, res) {
  var searchArray = new Object();
  searchArray['unique_num'] = req.body.unique_num;

  Patient.find(searchArray).then(function(patient_data) {
    if (patient_data == '' || patient_data == null){
      res.json({status : false , message : 'No Unique number exists in database'});
    }else{      
      PatientMedication.insertMany(req.body).then(function(patient_med_data) {
        res.json({status : true , message : 'Medication Added Successfully'});
      }).catch(function(error){
        res.json({status : false , message : 'Something Wrong Happens'});
      });
    }
  }).catch(function(error){
    res.json({status : false , message : 'No Unique number exists in database' , error : error});
  });
};

exports.updateMedRecord = function(req, res) {
  PatientMedication.updateOne({"_id" : req.body._id},req.body).then(function(patient_med_data) {
      res.json({status : true , message : 'Medication Updated Successfully'});
    }).catch(function(error){
      res.json({status : false , message : 'Something Wrong Happens'});
    });
  };

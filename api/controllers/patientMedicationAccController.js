'use strict';

var mongoose = require('mongoose'),
PatientMedicationAcc = mongoose.model('medication');

exports.getPatientMedicationAccDetails = function(req, res) {
  PatientMedicationAcc.find(req.body).then(function(medication_data) {
    if (medication_data == '' || medication_data == null){
      res.json({status : false , message : 'No Medication Records Found'});
    }else{ 
      res.json({status : true , message : 'Records found' , data : medication_data});
    }
  }).catch(function(error){
  	res.json({status : false , message : 'No Medication Records Found' , error : error});
  });
};

'use strict';

var mongoose = require('mongoose'),
PatientMedication = mongoose.model('medication');

exports.getPatientMedicationDetails = function(req, res) {
  PatientMedication.find(req.body, function(err, medication_data) {
    if (err)
      res.send(err);
    res.json(medication_data);
  });
};

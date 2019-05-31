'use strict';

var mongoose = require('mongoose'),
Patient = mongoose.model('patient');
// User = mongoose.model('login_record','patient');

exports.searchPatient = function(req, res) {
  Patient.find({}, function(err, patient_data) {
    if (err)
      res.send(err);
    res.json(patient_data);
  });
};

  // let x = "'"+req.body.searchwith+"':'"+req.body.searchValue+"'";
  // res.json(x);

  // Patient.find({"name" : "p1"}, function(err, patient_data) {
  //   if (err)
  //     res.send(err);
  //   res.json(patient_data);
  // });

//   Patient.find({}, function(err, patient_data) {
//     if (err)
//       res.send(err);
//     res.json(patient_data);
//   });

// };

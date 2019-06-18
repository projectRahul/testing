'use strict';
var mongoose = require('mongoose'),
Patient = mongoose.model('patient'),
PatientMedication = mongoose.model('medication');

var jwt = require('jsonwebtoken');

/*******Image Upload***********/
var multer = require('multer');
// var upload = multer({dest:'upload/'});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload')
  },
  filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
}) 
var upload = multer({ storage: storage })
/***********************************************/

module.exports = function(app) {
var userList = require('../controllers/userController');
var patient = require('../controllers/patientController');
var patientMedication = require('../controllers/patientMedicationController');


  app.route('/user/login')
  .post(userList.login_user);//Login user
    
  // app.post('/searchPatient',verifyToken,function(req, res, next) {    
  //   jwt.verify(req.token,'secretkey',(errr,authData)=>{
  //     if (errr){ 
  //       res.sendStatus(403); 
  //     }else{
  //       var searchArray = new Object();
  //       searchArray[req.body.searchwith] = req.body.searchValue;
  //       Patient.find(searchArray, function(err, patient_data) {
  //         if (err){ res.send(err); }
  //         res.json(patient_data);
  //       });
  //     }
  //   });
  // });

  app.route('/searchPatient')
   .post(patient.searchPatient);


  app.route('/getPatientDetails')
  .post(patient.getPatientDetails);
    

  app.route('/getPatientMedicationDetails')
  .post(patientMedication.getPatientMedicationDetails);




  app.post('/addNewPatient',upload.single('image'),function(req, res, next) {
    if(req.body.image !=='undefined'){
      req.body.image = req.file.filename;
    }else{
      req.body.image = '';
    }
    let record_to_insert = req.body;
    Patient.insertMany(record_to_insert).then(function(patient_data) {
      res.json({status : true , message : 'Patient Records Added Successfully'});
    }).catch(function(error){
      res.json({status : false , message : 'Patient Not Added'});
    });
  });


  // Middleware Verify token
  function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
      // Extract token
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      //set token
      req.token = bearerToken;
      //Next middleware
      next();
    }else{
      res.sendStatus(403);
    }
  }

};
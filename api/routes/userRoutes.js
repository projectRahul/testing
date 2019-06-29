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
var patientMedicationAcc = require('../controllers/patientMedicationAccController');
var admin = require('../controllers/adminController');


  app.post('/getCollectionList',function(req, res, next) {
    mongoose.connection.db.listCollections().toArray(function(err, names) {
      let data = [];
      let i=0;
      names.forEach(function(e,i,a) {
          data[i]=e.name;
          i++;
      });
      res.json({status : true , message : 'Collection found' , data : data});
    });
  });
  
  app.post('/user/login', userList.login_user);

  app.post('/searchPatient', verifyToken, patient.searchPatient);

  app.post('/getPatientDetails', verifyToken, patient.getPatientDetails);    

  app.post('/getPatientMedicationDetails', verifyToken, patientMedication.getPatientMedicationDetails);
  
  app.post('/getPatientMedicationAccDetails', verifyToken, patientMedicationAcc.getPatientMedicationAccDetails);

  app.post('/getDrugDropdown', verifyToken, patientMedication.getDrugDropdown);    

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
      if(bearerToken != 'null'){
        req.token = bearerToken;
        //Next middleware
        next();
      }else{
        res.json({status : false , message : 'Authorization failed'});
      }
    }else{
      res.json({status : false , message : 'Authorization failed'});
    }
  }

};
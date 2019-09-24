'use strict';
var mongoose = require('mongoose'),
Patient = mongoose.model('patient'),
PatientMedication = mongoose.model('medication');
// csvRecords = mongoose.model('csv_record');

var jwt = require('jsonwebtoken');
var multer = require('multer');
var path = require('path')
var csv = require('csv-parser');
var fs = require('fs');
var moment = require('moment');
var nodemailer = require('nodemailer');
var paginate = require('jw-paginate');



/*******Image Upload***********/
// var upload = multer({dest:'upload/'});
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(path.extname(file.originalname) == '.csv'){
      cb(null, 'upload/csv')
    }else{
      cb(null, 'upload')
    }
  },
  filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
}) 
var upload = multer({ storage: storage })
/***********************************************/


/********Setting CronJob to remove directory content*******/
var CronJob = require('cron').CronJob;
var job = new CronJob({
  cronTime: '0 */10 * * * *',//Runs cron every 10 mins
  onTick: function() {
    var datetime = new Date();
    datetime = moment(datetime).format("YYYY-MM-DD HH:mm:ss");
    console.log(datetime);
    fs.readdir('upload/csv', (err, files) => {
      if (err) throw err;
      for (var file of files) {
        fs.unlink(path.join('upload/csv', file), err => {
          if (err) throw err;
        });
      }
    });
  },
  start: true,
  timeZone: 'Asia/Kolkata'
});
job.start();


/**********************************************************/
module.exports = function(app) {
var userList = require('../controllers/userController');
var patient = require('../controllers/patientController');
var patientMedication = require('../controllers/patientMedicationController');
var patientMedicationAcc = require('../controllers/patientMedicationAccController');


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


  app.post('/getSampleCollection',function(req, res, next) {
    
    var str = req.body.collection_name;
    str = str.slice(0,-1);
    var sample_collection = mongoose.model(str);
    var attributes = [];
    sample_collection.schema.eachPath(function(path){
      attributes.push(path)
    });
    res.json({status : true , message : 'Attributes Found Successfully', data : attributes});
  });
  
  app.post('/user/login', userList.login_user);
  /**********Testing**********/
    app.post('/testcallback', function(req,res,next){
      callBackFunction (req.body.testdata, function ( err, response ){
         console.log(response);
         if(err){
           res.json(response);
         }else{
           res.json(response);
         }
      })
       
    });
    function callBackFunction (data, callback){
      // console.log(data);
      if(data !== ''){
        callback('',{status : true , message : data}) //if not error
      }
      if(data == ''){
        callback(data,{status : false , message : 'No Action Selected'}) //if error
      }
    }
  /***************************/
  app.post('/searchPatient', verifyToken, patient.searchPatient);

  app.post('/getPatientDetails', verifyToken, patient.getPatientDetails);    

  app.post('/getPatientMedicationDetails', verifyToken, patientMedication.getPatientMedicationDetails);
  
  app.post('/getPatientMedicationAccDetails', verifyToken, patientMedicationAcc.getPatientMedicationAccDetails);

  app.post('/getDrugDropdown', verifyToken, patientMedication.getDrugDropdown);  
  
  app.post('/addNewMedication', verifyToken, patientMedication.addNewMedication);
    
  app.post('/updateMedRecord', verifyToken, patientMedication.updateMedRecord);  

  app.post('/getUserDetailsQR', verifyToken, userList.getUserDetailsQR);    

  app.post('/getPatientMedicationDetailsPagin', function(req, res, next) {
      const page = parseInt(req.body.page) || 1;
      if(typeof req.body.drug !== 'undefined'){
        req.body = {unique_num : req.body.unique_num, drug : req.body.drug};
      }else{
        req.body = {unique_num : req.body.unique_num};
      }
      PatientMedication.find(req.body).then(function(medication_data) {
        if (medication_data == '' || medication_data == null){
          res.json({status : false , message : 'No Medication Records Found'});
        }else{ 
          // page = parseInt(page) || 1;
          const pager = paginate(medication_data.length, page);
          const pageOfItems = medication_data.slice(pager.startIndex, pager.endIndex + 1);
          return res.json({ pager, pageOfItems });    
        }
      }).catch(function(error){
        res.json({status : false , message : 'No Medication Records Found' , error : error});
      });
  });
  

/*****Image Upload***********/
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

/********Csv Insert***************/
  app.post('/csvRecord',upload.single('file'),function(req, res, next) {

    if(req.body.file !=='undefined'){
      req.body.file = req.file.filename;
    }else{
      req.body.file = '';
    }
    if(req.body.file == ''){
      res.json({status : false , message : 'Someting Wrong Happens'});
    }else{
      
      var results = [];
      var str = '';
      var csvRecords = '';
      fs.createReadStream('upload/csv/'+req.body.file)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          
        str = req.body.select_table;
        str = str.slice(0,-1);
        
        csvRecords = mongoose.model(str);
        
        if(req.body.action == 'withouttruncateadd'){
          csvRecords.insertMany(results).then(function(csv_records) {
            res.json({status : true , message : 'Records Added Successfully'});
          }).catch(function(error){
            res.json({status : false , message : 'Records Not Added'});
          });          
        }else if(req.body.action == 'truncate'){
           csvRecords.remove().then(function(csv_records) {
              csvRecords.insertMany(results).then(function(csv_records) {
                res.json({status : true , message : 'Records Added Successfully'});
              }).catch(function(error){
                res.json({status : false , message : 'Records Not Added'});
              });
           }).catch(function(error){
             res.json({status : false , message : 'Unable to truncate records'});
           });
        }else{
          res.json({status : false , message : 'No Action Selected'});
        }
      });
    }
  });


  app.post('/sendmail',function(req, res, next) {
    var subject = req.body.heading;
    var toemail = req.body.email;
    var message = req.body.content;
    // var message = '<p>This is HTML content</p>';
    // sendMail('tinymce@mailinator.com','Welcome to ExpertPHP.in',message);
    var smtpConfig = {
      service: 'Gmail',
      auth: {
        user: '*****************@gmail.com',
        pass: '***********'
      }
    };
    var transporter = nodemailer.createTransport(smtpConfig);
    var mailOptions = {
      from: '"TinyMce" <tinymce@mailinator.com>', // sender address
      to: toemail, // list of receivers
      subject: subject, // Subject line
      text: 'Hello world ?', // plaintext body
      html: message // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        // console.log(error);
        res.json({status : false , message : 'Something Went Wrong'});
      } else {
        // console.log('Email sent: ' + info.response);
        res.json({status : true , message : 'Mail Send Successfully'});
      }      
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
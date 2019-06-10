'use strict';
var multer = require('multer');
var upload = multer({dest:'upload/'});

module.exports = function(app) {
var userList = require('../controllers/userController');
var patient = require('../controllers/patientController');
var patientMedication = require('../controllers/patientMedicationController');

  app.route('/user')
    .get(userList.list_all_user)
    .post(userList.create_user);//Insert new user

  app.route('/user/login')
    .post(userList.login_user);//Login user

  app.route('/user/:userId')
    .get(userList.read_user)
    .put(userList.update_user)
    .delete(userList.delete_user);

    app.route('/searchPatient')
    .post(patient.searchPatient);

    app.route('/getPatientDetails')
    .post(patient.getPatientDetails);
    
    app.route('/addNewPatient',upload.single('image'))
    .post(patient.addNewPatient);

    app.route('/getPatientMedicationDetails')
    .post(patientMedication.getPatientMedicationDetails);

};
// upload.single('image')
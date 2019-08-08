 
module.exports = {
	foo : function(){
		User = require('../models/userModel'); //created model loading here
		Patient = require('../models/patientModel'); //created model loading here
		PatientMedication = require('../models/patientMedicationModel'); //created model loading here
		PatientMedicationAcc = require('../models/patientMedicationAccModel'); //created model loading here
		csvRecord = require('../models/csvRecordModel'); //created model loading here
	},
}
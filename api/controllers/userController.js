'use strict';
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose'),
User = mongoose.model('login_record');

//-1 is for decending order
exports.login_user = function(req, res) {
  User.find(req.body).then(function(user) {
  	if(req.body.is_google_user == '1'){//if google login
  		if (user == '' || user == null){
			User.insertMany(req.body).then(function(user_data) {
				jwt.sign({'user':user['email']},'secretkey',{ expiresIn: '1h' },(err,token)=>{
			      user = user.concat({token});
			      res.json(user);
			    });
			});
	    }else{ 
		    jwt.sign({'user':user['email']},'secretkey',{ expiresIn: '1h' },(err,token)=>{
		      user = user.concat({token});
		      res.json(user);
		    });
		}
    }else{//simple login
	    if (user == '' || user == null){
	      res.json({status : false , message : 'Wrong credentials'});
	    }else{ 
		    jwt.sign({'user':user['email']},'secretkey',{ expiresIn: '1h' },(err,token)=>{
		      user = user.concat({token});
		      res.json(user);
		    });
		}
	}
  }).catch(function(error){
  	res.json({status : false , message : 'Wrong Credentials' , error : error});
  });
};


exports.getUserDetailsQR = function(req, res) {
  User.find(req.body).limit(1).then(function(user) {
  	res.json({status : true , message : 'Records Found' , data : user});
  }).catch(function(error){
  	res.json({status : false , message : 'No Records Found' , error : error});
  });
};

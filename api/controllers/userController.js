'use strict';
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose'),
User = mongoose.model('login_record');

//-1 is for decending order
exports.login_user = function(req, res) {
  User.find(req.body, function(err, user) {
    if (err){ res.send(err); }
    jwt.sign({'user':user['email']},'secretkey',(err,token)=>{
      user = user.concat({token});
      res.json(user);
    });
  });
};

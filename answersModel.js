var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var answersSchema = schema({
		userid:{type:String ,required:true},
		ans1:{type:String },
        ans2:{type:String },
        ans3:{type:String },
        ans4:{type:String },
    });
var answerroute = module.exports = mongoose.model('answers',answersSchema);
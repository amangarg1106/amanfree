var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var cardSchema = schema({
		
	    cardNumber:{type:Number ,required:true},
        cardHolderName:{type:String ,required:true},
        expiryDate:{type:String ,required:true},
    });
var userroute = module.exports = mongoose.model('users',cardSchema);
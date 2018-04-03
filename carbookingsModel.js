
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var CarBookingSchema = schema({
		
	    cardNumber:{type:Number ,required:true},
        cardHolderName:{type:String ,required:true},
        expiryDate:{type:String ,required:true},
    });
var carbookingroute = module.exports = mongoose.model('carbookings',CarBookingSchema);
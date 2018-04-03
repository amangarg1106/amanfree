var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var OtpSchema = schema({
		mobile:{ type: String, required: true},
        otp:{ type: String, required: true},
        created:{ type: String, required: true, default: Date.now },
        modified:{ type: String, required: true, default: Date.now }
    });
var otproute = module.exports = mongoose.model('otp',OtpSchema);
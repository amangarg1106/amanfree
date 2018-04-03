var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var userSchema = schema({
	fullname: {type:String},
    password: {type:String},
    roleid: {type:String},
    email: {type:String, lowercase: true, trim: true,  required:true, },
    otp: {type:String,  default: 0000},
    gender: {type:String },
    //address: {type:String, required:true},
    drivingLicenseFront: {type:String },
    personalIdenttityFront: {type:String },
    drivingLicenseBack: {type:String },
    personalIdenttityBack: {type:String },
    selfieWithDrivingLicense: {type:String },
    profile: {type:String },
    card_details: { type: Array, default: [] },
    mobile: {type:String  },
    status: { type: Number, default: 0 },
    mobile_verify: { type: Number, default: 0 },
    userregtype:{type: String},
    createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
    
});
var userroute = module.exports = mongoose.model('users',userSchema);
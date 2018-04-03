var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var PriceSettingSchema = schema({
		priceperminute:{type: String},
        priceperminuteforatoatrips:{type: String},
        fordfigo:{type: String},
        fordecosport:{type: String},
        monthlymembershipcharges:{type: String},
        applicationfees:{type: String},
        excesschargeabove:{type:String},
        excesskilometers:{type: String},
        membershipcard:{type: String},
        administrationfeesforfines:{type: String},
        administrationfeesforsalik:{type: String},
        lostmembershipcard:{type: String},
        excessivecleaning:{type: String},
        penaltyforexceeding:{type: String},
        relocationofwrongparkedcarin:{type: String},
        relocationofwrongparkedcaroutside:{type: String},
        unsecuredvehicle:{type: String},
        excesslossofuse:{type: String},
        lostkeys:{type: String},
        excessamountincaseofaccidents:{type: String},
        createdby:{type: String},
        modifiedby:{ type: String},
        created:{ type: String, required: true, default: Date.now },
        modified:{ type: String, required: true, default: Date.now }
    });
var pricesettingroute = module.exports = mongoose.model('pricesetting',PriceSettingSchema);
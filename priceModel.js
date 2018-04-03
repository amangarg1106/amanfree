var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var priceSchema = schema({
	damage:{type:String ,required:true},
	price:{type:String },
    createdby:{type: String},
    modifiedby:{ type: String},
    status:{ type: String, required: true, default: "0" },
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
    });
var pricesroute = module.exports = mongoose.model('prices',priceSchema);
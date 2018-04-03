var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var vechicleyearSchema = schema({
	vechiclemodel:{type:String},
	vechicletype:{type:String},
	vechicleyear:{type:String},
	status:{ type: String, required: true, default: 0 },
	createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
});
var roleroute = module.exports = mongoose.model('vechicleyears',vechicleyearSchema);
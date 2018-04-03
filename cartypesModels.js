var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var cartypeSchema = schema({
	modelname:{type:String, lowercase: true, trim: true, required: true},
	status:{ type: String, required: true, default: 0 },
	createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
});
var cartyperoute = module.exports = mongoose.model('carmodels',cartypeSchema);
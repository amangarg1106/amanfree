var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var broadcastSchema = schema({
	subject: { type : String},
    message : { type : String},
    status:{ type: String, required: true, default: 0 },
	createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
    });
var broadcastroute = module.exports = mongoose.model('broadcasts',broadcastSchema);
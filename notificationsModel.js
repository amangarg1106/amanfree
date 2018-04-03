var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var notificationSchema = schema({
	event:{type: String},
	usertype:{type: String},
	messageen:{type: String},
	messagear:{type: String},
	status:{ type: String, required: true, default: 0 },
	createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
});
var notificationroute = module.exports = mongoose.model('notifications',notificationSchema);
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var roleSchema = schema({
	rolename:{type:String, lowercase: true, trim: true },
	createdby:{type: String  },
    modifiedby:{ type: String  },
    status:{ type: String, required: true, default: 0 },
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
   
});
var roleroute = module.exports = mongoose.model('roles',roleSchema);
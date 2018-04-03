var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var AdminuserSchema = schema({
		firstname:{ type: String, required: true},
        lastname:{ type: String, required: true},
        email:{ type: String, lowercase: true, trim: true, required: true},
        gender:{type: String, required: true},
        password:{ type: String, required: true},
        usertype:{ type: String, required: true},
        profile:{ type: String, required: true},
        status:{ type: String,required: true, default: 0},
        createdby:{type: String},
        modifiedby:{ type: String},
        created:{ type: String, required: true, default: Date.now },
        modified:{ type: String, required: true, default: Date.now }
    });
var adminuserroute = module.exports = mongoose.model('adminusers',AdminuserSchema);
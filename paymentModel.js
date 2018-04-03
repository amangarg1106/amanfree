var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var paymentSchema = schema({
	transcationid:{type:String},
	vechicleid:{type:String},
	userid:{type:String},
	username:{type:String, lowercase:true, trim:true},
	vechicleno:{type: String},
	payment:{type:String},
	createdby:{type: String  },
    modifiedby:{ type: String  },
    status:{ type: String, required: true, default: 0 },
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
   
});
var paymentroute = module.exports = mongoose.model('payments',paymentSchema);
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var carSchema = schema({
	carname:{type:String},
	carmodel:{type:String, lowercase:true, trim:true, required:true},
	carno:{type:String, lowercase:true, trim:true, required:true},
	cartype:{type:String, lowercase:true, trim:true, required:true},
	carregyear:{type:String, lowercase:true, trim:true, required:true},
	carcondition:{type:String},
	fuellevel:{type:String, required: true, default: 0},
	carImage: {type:String},
	distance: {type:String},
	damages:{type:Array, default: []},
	damageImages:{type:Array, default: []},
	status:{ type: String, required: true, default: 0 },
	loc: {
      type: [Number],   // format will be [ <longitude> , <latitude> ]
      index: '2d',
       default: [0,0]       // create the geospatial index
    },
	createdby:{type: String},
    modifiedby:{ type: String},
    created:{ type: String, required: true, default: Date.now },
    modified:{ type: String, required: true, default: Date.now }
});
carSchema.index({ loc: '2d' });
var carroute = module.exports = mongoose.model('cars',carSchema);
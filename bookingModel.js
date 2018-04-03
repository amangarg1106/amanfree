var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var BookingsSchema = schema({
		userid:{type:String},
        username:{type:String},
        carid:{type:String },
        carlongitude:{type:String },
        carlatitude:{type:String },
        transactionid:{type:String},
        reservetime:{type:String},
        reserveendtime:{type:String},
		ans1:{type:String },
        ans2:{type:String },
        ans3:{type:String },
        ans4:{type:String },
        ridestarttime:{type:String},
        rideendtime:{type:String},
        ridecalctime:{type:String},
        ridedistance:{type:String},
		cardamage:{type:String},
        nearestfuelstation:{type:String},
        nearestsafeparking:{type:String},
        parkingtype:{type:String},
        carplate:{type:String},
        carparkingzone:{type:String},
        damages:{type:String},
        damageImages:{ type: Array, default: [] },
        ridedamage:{type:String},
        ridedamageImages:{ type: Array, default: [] },
        cleanliness:{type:Number},
        tac:{type:String},
        startlocationname:{type:String},
        endlocationname:{type:String},
        endlongitude:{type:String},
        endlatitude:{type:String},
        ridestatus:{type:Number, required: true, default: 0 },
        createdby:{ type: String},
        modifiedby:{ type: String },
        created:{ type: String, required: true, default: Date.now },
        modified:{ type: String, required: true, default: Date.now }
    });
var bookingroute = module.exports = mongoose.model('bookings',BookingsSchema);
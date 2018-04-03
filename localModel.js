var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var LocationSchema = new schema({  
    name: String,
    loc: {
      type: [Number],   // format will be [ <longitude> , <latitude> ]
      index: '2d'       // create the geospatial index
    }
});

var localsroute = module.exports = mongoose.model('localization',LocationSchema);
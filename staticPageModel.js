var mongoose = require('mongoose');
var schema = mongoose.Schema;
var db = require('../config/databaseConnection');
var con = db.con;

var staticPageSchema = schema({
	slug : { type : String},
    content_en : { type : String},
    content_ar : { type : String},
    title : { type : String},
    created_date : { type : String },
    modified_date : { type : String }
});
var staticPageroute = module.exports = mongoose.model('staticpages',staticPageSchema);
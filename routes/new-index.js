
var express = require('express');
var router = express.Router();
const Item = require("../models/itemsModel");


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://lekim:nWHG960wbiRrOfue@cluster0.wk9vibk.mongodb.net/test?retryWrites=true&w=majority";

router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		res.send({message: "This apxajxjabc"})
	}); 
});

module.exports = router;
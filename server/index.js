const express = require("express");
const request = require("request");
const unirest = require("unirest");
const parser = require("xml2json");

const app = express();


let url = "http://api.eventful.com/rest/events/search?app_key=b7BFXqw9rckW5SzC&keywords=books&location=San+Francisco&date=Future";


// Four Square
// CLIENT_ID
// EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0
// CLIENT_SECRET
// FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE

//Eventful API Key
// b7BFXqw9rckW5SzC
// example
// http://api.eventful.com/rest/events/search?app_key=b7BFXqw9rckW5SzC&keywords=books&location=San+Francisco&date=Future
// example
// http://api.eventful.com/rest/categories/list?app_key=b7BFXqw9rckW5SzC


let access_token = "b7BFXqw9rckW5SzC";


app.get('/api', function(req, res) {
	let query;
unirest.get('http://api.eventful.com/rest/events/search?app_key=' + access_token + '&keywords=books&location=San+Francisco&date=Future')
.end(function(data){
	let eventData = parser.toJson(data.body);

	return res.send(eventData);

});

});









app.listen(process.env.PORT || 8080, function(){
	console.log("EventBase server running!!");
});
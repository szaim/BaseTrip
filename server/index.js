const express = require("express");
const request = require("request");
const unirest = require("unirest");
const parser = require("xml2json");

const app = express();


let url = "http://api.eventful.com/rest/events/search?app_key=b7BFXqw9rckW5SzC&keywords=books&location=San+Francisco&date=Future";

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
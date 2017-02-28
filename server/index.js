const express = require("express");
const request = require("request");
const unirest = require("unirest");
const parser = require("xml2json");

const app = express();


let url = "https://api.foursquare.com/v2/venues/explore";


// Four Square
// CLIENT_ID
let clientID = "EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0";
// CLIENT_SECRET
let clientSecret = "FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE";
let location = '40.7,-74';
let date = formatted_date();


console.log(date);

// https://api.foursquare.com/v2/venues/search
//   ?client_id=CLIENT_ID
//   &client_secret=CLIENT_SECRET
//   &ll=40.7,-74
//   &query=sushi
//   &v=YYYYMMDD
//   &m=foursquare

// Search (by keyword)
// https://api.foursquare.com/v2/venues/search?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE&ll=40.7,-74&query=sushi&v=20170227

// Explore
// https://api.foursquare.com/v2/venues/explore?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE&ll=40.7,-74&query=food&v=20170227

// https://api.foursquare.com/v2/events/categories/food?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE&ll=40.7,-74&v=20170227


function formatted_date()
{
   var result="";
   var d = new Date();
   var month = (d.getMonth()+1);
   var day = d.getDate();
   if (d.getMonth()+1 < 10){
   		var month = '0' + (d.getMonth()+1);
   }
    else if (d.getDate()+1 < 10){
   		var day = '0' + d.getDate();
   }
   result += d.getFullYear() +''+ month +''+ day;
   return result;
}


app.get('/', function(req, res) {
	res.send('BaseTrip');
});


app.get('/venue/search/:search', function(req, res) {
	let query = req.params.search;
	unirest.get('https://api.foursquare.com/v2/venues/search?client_id=' + clientID + '&client_secret=' + clientSecret + '&ll=' + location + '&query=' + query + '&v=' + date)
	.end(function(data){
		return res.send(data);
	});
});


app.get('/venue/explore/:explore', function(req, res) {
	let query = req.params.explore;
	unirest.get('https://api.foursquare.com/v2/venues/explore?client_id=' + clientID + '&client_secret=' + clientSecret + '&ll=' + location + '&query=' + query + '&v=' + date)
	.end(function(data){
		return res.send(data);
	});
});














app.listen(process.env.PORT || 8080, function(){
	console.log("EventBase server running!!");
});
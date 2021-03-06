const express = require("express");
const request = require("request");
const unirest = require("unirest");
const NodeGeocoder = require('node-geocoder');


const app = express();

app.use('/', express.static('build'));

let url = "https://api.foursquare.com/v2/venues/explore";
let latLong;

// Four Square
// CLIENT_ID
let clientID = "EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0";
// CLIENT_SECRET
let clientSecret = "FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE";
let date = formatted_date();


// https://api.foursquare.com/v2/venues/4471bf9af964a5209c331fe3/photos?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE

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
// https://api.foursquare.com/v2/venues/explore?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE&ll=40.7,-74&query=food&v=20170227&venuePhotos=1

// https://api.foursquare.com/v2/events/categories/food?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE&ll=40.7,-74&v=20170227


//categories

// https://api.foursquare.com/v2/events/categories?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE&query=food,outdoor&ll=40.7,-74&v=20170227


function formatted_date()
{
   var result="";
   var d = new Date();
   var month = (d.getMonth()+1);
   var day = d.getDate();
   if (d.getMonth()+1 < 10){
   		var month = '0' + (d.getMonth()+1);
   }
   if (d.getDate()+1 < 10){
   		var day = '0' + d.getDate();
   }
   result += d.getFullYear() +''+ month +''+ day;
   console.log(result);
   return result;
}




app.get('/venue/search/:search', function(req, res) {
	let search = req.params.search;
	unirest.get('https://api.foursquare.com/v2/venues/search?client_id=' + clientID + '&client_secret=' + clientSecret + '&ll=' + location + '&query=' + search + '&v=' + date)
	.end(function(data){
		return res.send(data);
	});
});




app.get('/venue/explore/:explore/:location', function(req, res) {
	let query = req.params.explore;
   let location = req.params.location;
  
   let geocoderProvider = 'google';
   let httpAdapter = 'https';
   // optionnal
   let extra = {
      apiKey: 'AIzaSyCwg5Nu1Ti8BHSJWbijp_ATUTKS_jfFJyc', // for map quest
      formatter: null         // 'gpx', 'string', ...
   };

   let geocoder = NodeGeocoder(geocoderProvider, httpAdapter, extra);
   geocoder.geocode(location, function(err, res) {
     console.log('location', res);
     latLong = ((res[0].latitude).toFixed(2) + ',' + (res[0].longitude).toFixed(2)).toString();
     console.log('latlong', latLong);
     
   });
   //latlong is showing undefined (need to fix)
   console.log('latlong after geocoder', latLong);
   function getData() {
   	unirest.get('https://api.foursquare.com/v2/venues/explore?client_id=' + clientID + '&client_secret=' + clientSecret + '&ll=' + latLong + '&query=' + query + '&v=' + date + '&venuePhotos=1')
   	.end(function(data){
         console.log('getDate hit');
   		return res.send(data);
   	});
   }
   //using setTimeout since geocoder callback load time is delayed preventing the latLong variable to update
   setTimeout(getData, 1500);
});


app.get('/venue/current/:explore/:location', function(req, res) {
   let query = req.params.explore;
   let location = req.params.location;

   console.log('location for homepage', location)

   unirest.get('https://api.foursquare.com/v2/venues/explore?client_id=' + clientID + '&client_secret=' + clientSecret + '&ll=' + location + '&query=' + query + '&v=' + date + '&venuePhotos=1')
   .end(function(data){
      return res.send(data);
   });
});





//image sample prefix + size + suffix
// https://igx.4sqi.net/img/general/300x500/48623284_fqbPs5xy6jImyJu6U2w_xkkR7lilKCVfZEE8qSC66WU.jpg
//add venuePhotos=1 (to get featured photo)
 // https://api.foursquare.com/v2/venues/explore?client_id=EKBGEVUEK3PRHMIP3XZA5LJRTYVQIJ34IKBGES2VNXAFTOJ0&client_secret=FK2FTS5XZ511QJAXDMMI0K0NEX3VTWD1HW12ULQZLG0LM1LE&ll=40.7,-74&query=food&v=20170227&venuePhotos=1







app.listen(process.env.PORT || 8080, function(){
	console.log("EventBase server running!!");
});
const express = require("express");
const express = require("request");
const app = express();


//Eventful API Key
// b7BFXqw9rckW5SzC

http://api.eventful.com/rest/events/search?app_key=b7BFXqw9rckW5SzC&keywords=books&location=San+Francisco&date=Future

app.get("/", function(req, res){
let query = ;
let url =;

request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body)
            res.send({data});
        }
    });

});


app.listen(process.env.PORT || 8080, function(){
	console.log("EventBase server running!!");
});
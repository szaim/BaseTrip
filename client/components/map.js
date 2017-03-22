const React = require('react');


// let location;

const MapLocation = function(props) {
	let address = props.location.address;
	let city = props.location.formattedAddress[1];
	let location = `${props.location.address} ${props.location.formattedAddress[1]}`;

	if(!address || !city) {
		location = Math.round(props.lat) + ',' + Math.round(props.long);
	}


	return (
		<div className='map-container'>
            <iframe
                allowFullScreen
                className="left-column" 
                title="GoogleMaps"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDUfii29d9wCw-d3rwqT1CtiCPQxjfLLUg&q=${location}`} />

		</div>

	)
};

            

module.exports = MapLocation;
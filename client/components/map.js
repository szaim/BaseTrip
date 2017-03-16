const React = require('react');


let location;

const MapLocation = function(props) {
	return (
		<div>
			<iframe
                className="left-column" 
                title="GoogleMaps"
                width="100%"
                height="260"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=california&amp;z=11&amp;output=embed">
            </iframe>
		</div>

	)
};


module.exports = MapLocation;
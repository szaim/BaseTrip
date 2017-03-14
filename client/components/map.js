const React = require('react');


let location;

const MapLocation = function(props) {
	return (
		<div>
			<iframe
                class="left-column" 
                title="GoogleMaps"
                width="100%"
                height="260"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?q=california&amp;z=11&amp;output=embed">
            </iframe>
		</div>

	)
};


module.exports = MapLocation;
const React = require('react');
const Header = require('./header');
const Info = require('./info');
const MapLocation = require('./map');
const Review = require('./review');
const SearchHeader = require('./container/SearchHeader');



const EventDetails = function(props) {
	
	return (
		<div>
			<SearchHeader />
		</div>

	)
};


module.exports = EventDetails;
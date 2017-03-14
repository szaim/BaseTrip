const React = require('react');
const Header = require('../header');
const Info = require('../info');
const MapLocation = require('../map');
const Review = require('../review');
const SearchHeader = require('./SearchHeader');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');



const EventDetails = function(props) {
	
	return (
		<div>
			<SearchHeader />
		</div>

	)
};


module.exports = EventDetails;
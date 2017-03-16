const React = require('react');
const Header = require('../header');
const Info = require('../info');
const MapLocation = require('../map');
const Review = require('../review');
const SearchHeader = require('./SearchHeader');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');



const EventDetails = React.createClass({

	render: function() {
	
	return (
		<div>
			<SearchHeader />
			<Info />
			<Review />
			<MapLocation />
		</div>

	)
}

});


var mapStateToProps = function(state, props) {
	return {
		event: state.selectedEvent
	}
};

const Container = connect()(EventDetails);

module.exports = Container;
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
	console.log('EventDetails', this.props.event);
	return (
		<div>
			<SearchHeader />
			<Info 
			name={this.props.event.venue.name}
			location={this.props.event.venue.location.city}
			tips={this.props.event.tips[0].text}
			prefix={this.props.event.venue.featuredPhotos.items[0].prefix}
			suffix={this.props.event.venue.featuredPhotos.items[0].suffix}
			rating={this.props.event.venue.rating}/>
			<Review 
			reasonName={this.props.event.reasons.items[0].reasonName}
			summary={this.props.event.reasons.items[0].summary}/>
			<MapLocation
			lat={this.props.event.venue.location.lat}
			long={this.props.event.venue.location.lng} />
		</div>

	)
}

});


var mapStateToProps = function(state, props) {
	return {
		event: state.selectedEvent
	}
};

const Container = connect(mapStateToProps)(EventDetails);

module.exports = Container;
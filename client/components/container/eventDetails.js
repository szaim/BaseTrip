const React = require('react');
const Header = require('../header');
const Info = require('../info');
const MapLocation = require('../map');
const SearchHeader = require('./SearchHeader');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');
const Category = require('./Category');
const Footer = require('../footer');


const EventDetails = React.createClass({

	render: function() {
	console.log('EventDetails', this.props.event);
	return (
		<div>
			<SearchHeader />
			<div>
				<Info 
					name={this.props.event.venue.name}
					location={this.props.event.venue.location}
					tips={this.props.event.tips[0].text}
					prefix={this.props.event.venue.featuredPhotos.items[0].prefix}
					suffix={this.props.event.venue.featuredPhotos.items[0].suffix}
					rating={this.props.event.venue.rating}
					status={this.props.event.venue.hours.status}
					url={this.props.event.venue.url}
					price={this.props.event.venue.price}
					contact={this.props.event.venue.contact} />
					<MapLocation
					location={this.props.event.venue.location}
					lat={this.props.event.venue.location.lat}
					long={this.props.event.venue.location.lng} />
			</div>
			<Footer directLink='https://blooming-ocean-74461.herokuapp.com/' brandName='Base Trip' />
			
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
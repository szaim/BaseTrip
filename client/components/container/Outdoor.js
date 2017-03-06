const React = require('react');
const CardEvent = require('../cardEvent');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');



const Outdoor = React.createClass({

	// componentWillMount: function() {
	// 	this.props.dispatch(actions.fetchOutdoor('40.7,-74'));
	// },

	render: function() {
		let outdoorList = this.props.outdoor.map((event,index) => {
			// console.log('event', event.venue.photos.groups);
			let prefix;
			let suffix;
			//if no photos set default image
			if(!event.venue.photos.groups.length){
				prefix = 'https://igx.4sqi.net/img/general/'; 
				suffix = '/48623284_fqbPs5xy6jImyJu6U2w_xkkR7lilKCVfZEE8qSC66WU.jpg';
			} else {
				prefix = event.venue.photos.groups[0].items[0].prefix;
				suffix = event.venue.photos.groups[0].items[0].suffix;
			}
			return (
				<CardEvent 
				key={index}
				prefix={prefix} 
				suffix={suffix}
				title={event.venue.name}
				rating={event.venue.rating}/>
			)
		});

				

		return (
				<div className='row'>
					<h1>Outdoor</h1>
					{outdoorList}
				</div>
		)

	}
});

var mapStateToProps = function(state, props) {
	return {
		outdoor: state.outdoor
	}
};



const Container = connect(mapStateToProps)(Outdoor);

module.exports = Container;
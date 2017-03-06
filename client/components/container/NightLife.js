const React = require('react');
const CardEvent = require('../cardEvent');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');



const NightLife = React.createClass({

	// componentWillMount: function() {
	// 	this.props.dispatch(actions.fetchNightLife('40.7,-74'));
	// },
	onNext: function() {
		this.props.dispatch(actions.nextNightLife());
		console.log("clicked");
	},

	render: function() {
		let nightLifeList = this.props.subNightLife.map((event,index) => {
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
				<button type='button' onClick={this.onNext}>Next</button>
					<h1>NightLife</h1>
					{nightLifeList}
				</div>
		)

	}
});

var mapStateToProps = function(state, props) {
	return {
		nightLife: state.nightLife,
		subNightLife: state.subNightLife
	}
};



const Container = connect(mapStateToProps)(NightLife);

module.exports = Container;
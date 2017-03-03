const React = require('react');
const CardEvent = require('../cardEvent');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');
const Food = require('./Food');
const Music = require('./Music');
const NightLife = require('./NightLife');
const Outdoor = require('./Outdoor');



const Categories = React.createClass({

	// componentWillMount: function() {
	// 	this.props.dispatch(actions.fetchFood('40.7,-74'));
	// 	this.props.dispatch(actions.fetchMusic('40.7,-74'));
	// 	this.props.dispatch(actions.fetchNightLife('40.7,-74'));
	// 	this.props.dispatch(actions.fetchOutdoor('40.7,-74'));
	// },

	// componentDidMount: function() {
	// 	this.props.dispatch(actions.fetchFood('40.7,-74'));
	// 	this.props.dispatch(actions.fetchMusic('40.7,-74'));
	// 	this.props.dispatch(actions.fetchNightLife('40.7,-74'));
	// 	this.props.dispatch(actions.fetchOutdoor('40.7,-74'));
	// },

	render: function() {
		return (
		<div className='container'>
			<Food />
			<Music />
			<NightLife />
			<Outdoor />
		</div>
		)
	}
});


const Container = connect()(Categories);

module.exports = Container;
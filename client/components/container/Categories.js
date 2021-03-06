const React = require('react');
const CardEvent = require('./CardEvent');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');
const Food = require('./Food');
const NightLife = require('./NightLife');
const Outdoor = require('./Outdoor');
const Category = require('./Category');



const Categories = React.createClass({
	render: function() {
		return (
		<div className='container'>
			<Food />
			<NightLife />
			<Outdoor />
			
		</div>
		)
	}
});


const Container = connect()(Categories);

module.exports = Container;
const Categories = require('./container/Categories');
const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../redux/action');
const Hello = require('./container/test');


const Home = React.createClass({

	componentWillMount: function() {
		this.props.dispatch(actions.fetchFood('40.7,-74'));
		this.props.dispatch(actions.fetchNightLife('40.7,-74'));
		this.props.dispatch(actions.fetchOutdoor('40.7,-74'));
	},
	render: function() {
		return (
		<div className="test">
		<Hello />
		</div>
		)
	}
});


const Container = connect()(Home);

module.exports = Container;


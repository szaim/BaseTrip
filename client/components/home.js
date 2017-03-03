// const React = require('react');
// const Categories = require('./categories');
const Categories = require('./container/Categories');



// const Home = function(props) {
// 	return (
// 		<div>
// 			<Categories />
// 		</div>

// 	)
// };


// module.exports = Home;



const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../redux/action');



const Home = React.createClass({

	componentWillMount: function() {
		this.props.dispatch(actions.fetchFood('40.7,-74'));
		this.props.dispatch(actions.fetchMusic('40.7,-74'));
		this.props.dispatch(actions.fetchNightLife('40.7,-74'));
		// this.props.dispatch(actions.fetchOutdoor('40.7,-74'));
	},

	// componentDidMount: function() {
	// 	this.props.dispatch(actions.fetchFood('40.7,-74'));
	// 	this.props.dispatch(actions.fetchMusic('40.7,-74'));
	// 	this.props.dispatch(actions.fetchNightLife('40.7,-74'));
	// 	this.props.dispatch(actions.fetchOutdoor('40.7,-74'));
	// },

	render: function() {
		return (
		<div>
			<Categories />
		</div>
		)
	}
});


const Container = connect()(Home);

module.exports = Container;
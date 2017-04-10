const React = require('react');
const connect = require('react-redux').connect;
const SearchHeader = require('./container/SearchHeader');
const Category = require('./container/Category');
const Footer = require('./footer');
const Loader = require('./loader');

const EventList = React.createClass({
	getInitialState: function() {
		return {
			loading: true
		};
	},
	componentWillMount: function() {
			setTimeout(() => {
				this.setState({loading: false});
			}, 3000);
	},
	render: function() {	
	let content = this.state.loading ? <div><SearchHeader /> <Loader /></div> : 
		<div>
			<SearchHeader />
			<Category />
			<Footer directLink='https://blooming-ocean-74461.herokuapp.com/' brandName='Base Trip' />
		</div>
	return (
		<div>
			{content}
		</div>
	)
}
});

const Container = connect()(EventList);

module.exports = Container;
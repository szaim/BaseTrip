const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');

const Search = React.createClass({

searchItem: function(event){
	event.preventDefault();
	let item = this.refs.exploreItem.value;
	let location = this.refs.location.value;
	console.log('this hit');
	console.log(item);
	this.props.dispatch(actions.fetchExplore(item, location));
},


	render: function() {
		return (
			<div>
				<form onSubmit={this.searchItem}>
					<input type='text' ref='location' placeholder='location' />
					<input type='text' ref='exploreItem' placeholder='search place' />
					<button type='submit'>Submit</button>
				</form>
			</div>
			)
	}
});


// var mapStateToProps = function(state, props) {
// 	return {
// 	}
// };

const Container = connect()(Search);

module.exports = Container;
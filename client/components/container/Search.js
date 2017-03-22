const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');
import { hashHistory } from 'react-router';

const Search = React.createClass({

searchItem: function(event){
	event.preventDefault();
	let item = this.refs.exploreItem.value;
	let location = this.refs.location.value;
	console.log('this hit');
	console.log(item);
	this.props.dispatch(actions.fetchExplore(item, location));
	hashHistory.push('/eventList');
},


	render: function() {
		return (
			<div className="search-container">
				<form className="row" onSubmit={this.searchItem}>
					<div className="row col-xs-6 input-wrapper">
					<label className="col-xs-12 search-label-right">Where</label>
						<input className="search-input-right" type='text' ref='location' placeholder='Destination, city' required />
					</div>
					<div className="col-xs-4 left-input-wrapper">
						<label className="col-xs-12 search-label-left">Category</label>
						<input className="search-input-left" type='text' ref='exploreItem' placeholder='Search category' required />
						<button className='btn btn-primary btn-lg search-button' type='submit'>Search</button>
					</div>
				</form>
			</div>
			)
	}
});



const Container = connect()(Search);

module.exports = Container;
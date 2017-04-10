const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');
import { hashHistory } from 'react-router';

const SearchMobile = React.createClass({

searchItem: function(event){
	event.preventDefault();
	let item = this.refs.exploreItem.value;
	let location = this.refs.location.value;

	// if(typeof this.refs.mobileLocation.value == 'string' || typeof this.refs.mobileExploreItem.value == 'string'){
	// 	console.log('this is hitting');
	// 	item = this.refs.mobileExploreItem.value;
	// 	location = this.refs.mobileLocation.value;
	// };

	console.log('this hit');
	console.log(item);
	this.props.dispatch(actions.fetchExplore(item, location));
	hashHistory.push('/eventList');
},


	render: function() {
		return (
			<div className='search-mobile-form-container'>
				<form  onSubmit={this.searchItem}>
					<div className='search-mobile-wrapper'>
						<input  className='search-input-mobile' type='text' ref='location' placeholder='Location' required />
						<input  className='search-input-mobile' type='text' ref='exploreItem' placeholder='Category' required />
							<button className='btn btn-primary btn-sm search-mobile-button-detail' type='submit'>Search</button>
					</div>
				</form>
			</div>
			)
	}
});



const Container = connect()(SearchMobile);

module.exports = Container;

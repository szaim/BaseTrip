const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');
import { hashHistory } from 'react-router';
import { Link } from 'react-router';

const SearchHeader = React.createClass({

searchItem: function(event){
	event.preventDefault();
	let exploreItem = this.refs.exploreItem.value;
	let location = this.refs.location.value;
	console.log('this hit');
	console.log(exploreItem);
	this.props.dispatch(actions.fetchExplore(exploreItem, location));
	hashHistory.push('/eventList');
},


	render: function() {
		return (
			<div>
				<header className="header search-detailPage">
						<div>
                    		<a href='http://localhost:8080/' className="brandName brandName-eventDetail" >BaseTrip</a>
                    	</div>
                    	<div className='search-form-container'>
						<form  onSubmit={this.searchItem}>
							<div className='search-wrapper'>
								<input  className='search-input' type='text' ref='location' placeholder='Destination, city' required />
								<input  className='search-input' type='text' ref='exploreItem' placeholder='Search category' required />
									<button className='btn btn-primary btn-md search-button-detail' type='submit'>Search</button>
							</div>
						</form>
						</div>
                </header>
			</div>
			)
	}
});



const Container = connect()(SearchHeader);

module.exports = Container;
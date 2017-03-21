const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');

const SearchHeader = React.createClass({

searchItem: function(event){
	event.preventDefault();
	let item = this.refs.exploreItem.value;
	console.log('this hit');
	console.log(item);
	this.props.dispatch(actions.fetchSearch(item));
},


	render: function() {
		return (
			<div className=''>
				<header className="header search-detailPage">
						<div>
                    	<a className="brandName" href="#">BaseTrip</a>
                    	</div>
                    	<div>
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
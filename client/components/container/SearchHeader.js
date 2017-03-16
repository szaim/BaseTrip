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
				<header className="">
                        	<a className="brandName" href="#">BaseTrip</a>
							<form className="row" onSubmit={this.searchItem}>
								<div className="col-xs-4 left-input-wrapper">
									<input className="search-input-left" type='text' ref='exploreItem' placeholder='Search category' required />
									<button className='btn btn-primary btn-lg search-button' type='submit'>Search</button>
								</div>
							</form>
                </header>
			</div>
			)
	}
});



const Container = connect()(SearchHeader);

module.exports = Container;
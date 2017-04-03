const React = require('react');
const SearchHeader = require('./container/SearchHeader');
const Category = require('./container/Category');
const Footer = require('./footer');

const EventList = function() {
	return (
		<div>
			<SearchHeader />
			<Category />
			<Footer directLink='https://blooming-ocean-74461.herokuapp.com/' brandName='Base Trip' />
		</div>
	)
}

module.exports = EventList;
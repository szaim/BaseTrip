const React = require('react');
const SearchHeader = require('./container/SearchHeader');
const Category = require('./container/Category');

var EventList = function() {
	return (
		<div>
			<SearchHeader />
			<Category />
		</div>
	)
}

module.exports = EventList;
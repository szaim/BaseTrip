const React = require('react');
const Food = require('./container/Food');
const Music = require('./container/Music');
const NightLife = require('./container/NightLife');
const Outdoor = require('./container/Outdoor');


const Categories = function(props) {
	return (
		<div className='container'>
			<Food />
			<Music />
			<NightLife />
			<Outdoor />
		</div>

	)
};


module.exports = Categories;
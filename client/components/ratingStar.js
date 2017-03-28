const React = require('react');
import StarRating from 'react-star-rating';

const ratingStar = function(props) {
	return (
		<div>
			<StarRating name="small-rating" size={18} totalStars={5} rating={props.rating} />
		</div>

	)
};

module.exports = ratingStar;
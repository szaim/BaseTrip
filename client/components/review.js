const React = require('react');



const Review = function(props) {
	return (
		<div>
			<span>Reviews</span>
			<span>{props.reasonName}</span>
			<p>{props.summary}</p>
		</div>

	)
};


module.exports = Review;
const React = require('react');



const CardEvent = function(props) {
	var link = '300x500';
	return (
		<div>
			<img src={`${props.prefix}300x500${props.suffix}`} />
		
		</div>

	)
};


module.exports = CardEvent;

// <h3>{props.title}</h3>
// 			<span>{props.rating}</span>
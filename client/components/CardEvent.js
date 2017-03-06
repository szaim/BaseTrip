const React = require('react');



const CardEvent = function(props) {
	var link = '300x500';
	return (
		<div className="col-lg-3">
			<img  src={`${props.prefix}300x500${props.suffix}`} />
			<h3>{props.title}</h3>
			<span>{props.rating}</span>
		</div>

	)
};


module.exports = CardEvent;


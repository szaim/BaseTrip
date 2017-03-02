const Reat = require('react');



const CardEevent = function(props) {
	return (
		<div>
			<img src={props.img} />
			<h3>{props.title}</h3>
			<span>{props.score}</span>
		</div>

	)
};


module.exports = CardEevent;
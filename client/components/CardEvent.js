const React = require('react');



const CardEvent = function(props) {
	var link = '300x500';
	return (
		<div className='col-lg-3'>
			<img src={`${props.prefix}300x500${props.suffix}`} />
			<h3>{props.title}</h3>
			<span>{props.rating}</span>
		</div>

	)
};


module.exports = CardEvent;

// https://igx.4sqi.net/img/general/300x500/48623284_fqbPs5xy6jImyJu6U2w_xkkR7lilKCVfZEE8qSC66WU.jpg
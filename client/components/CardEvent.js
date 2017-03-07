const React = require('react');



const CardEvent = function(props) {
	var link = '300x500';
	return (
		<div className="col-xs-6" style={{'padding-left': 0}}>
			<img className="event-img" src={`${props.prefix}300x500${props.suffix}`} />
			<div>
				<span className='event-title'>{props.title}</span><br />
				<span>{props.rating}</span>
			</div>
		</div>

	)
};


module.exports = CardEvent;


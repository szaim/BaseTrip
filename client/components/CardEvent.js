const React = require('react');
const router = require('react-router');
const Link = router.Link;


const CardEvent = function(props) {
	return (
		<div className="col-xs-6 card-animation" id={props.id} style={{'paddingLeft': 0}}>
			<Link to='eventDetails'>
			<img className="event-img" src={`${props.prefix}300x500${props.suffix}`} />
			</Link>
			<div>
				<span className='event-title'>{props.title}</span><br />
				<span>{props.rating}</span>
			</div>
		</div>

	)
};


module.exports = CardEvent;


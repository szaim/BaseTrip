const React = require('react');
const router = require('react-router');
const Link = router.Link;
const connect = require('react-redux').connect;
const actions = require('../../redux/action');


const CardEvent = React.createClass({
	onSelect: function() {
		let selectedData =  this.props.data;
		console.log('selectedData from CardEvent Comp', selectedData);
		this.props.dispatch(actions.selectEvent(selectedData));
	},

	render: function() {
	return (
		<div className="col-xs-6 card-animation" id={this.props.id} style={{'paddingLeft': 0}}>
			<Link to='eventDetails'>
			<img onClick={this.onSelect} className="event-img" src={`${this.props.prefix}300x500${this.props.suffix}`} />
			</Link>
			<div>
				<span className='event-title'>{this.props.title}</span><br />
				<span>{this.props.rating}</span>
			</div>
		</div>
	)
	}

});



const Container = connect()(CardEvent);

module.exports = Container;


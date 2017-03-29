const React = require('react');
const router = require('react-router');
const Link = router.Link;
const connect = require('react-redux').connect;
const actions = require('../../redux/action');
import Rating from 'react-rating-system';


const CardEvent = React.createClass({

	onSelect: function() {
		console.log('onSelect hit');
		let selectedData =  this.props.data;
		console.log('selectedData from CardEvent Comp', selectedData);
		this.props.dispatch(actions.selectEvent(selectedData));
	},

	render: function() {
	let style = {
		backgroundImage: `url(${this.props.prefix}300x500${this.props.suffix})`
	};
	let rating = ((this.props.rating) * 5) / 10; 

	return (
		<div className="col-xs-6 col-lg-3 card-animation" id={this.props.id} style={{'paddingLeft': 0}}>
			<Link to='eventDetails'>
			<div onClick={this.onSelect} className="event-img" style={style}>
				<div className='event-header-wrapper'>
					<span className='event-title'>{this.props.title}</span><br />
						<Rating image="http://i68.tinypic.com/14lhug1.png" fillBG="#f1c40f" initialBG="#6a6a6a" numberStars={5} initialValue={rating} editable={false} containerStyle={{ maxWidth: '100px' }}/>
				</div>
			</div>
			
			</Link>
		
		</div>
	)
	}

});



const Container = connect()(CardEvent);

module.exports = Container;


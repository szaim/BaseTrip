const React = require('react');
const CardEvent = require('../cardEvent');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');



const Outdoor = React.createClass({

	// componentWillMount: function() {
	// 	this.props.dispatch(actions.fetchOutdoor('40.7,-74'));
	// },
	onNext: function() {
		this.props.dispatch(actions.nextOutdoor());
		console.log("clicked");
	},

	render: function() {
		let outdoorList = this.props.subOutdoor.map((event,index) => {
			// console.log('event', event.venue.photos.groups);
			let prefix;
			let suffix;
			//if no photos set default image
			if(!event.venue.photos.groups.length){
				prefix = 'https://igx.4sqi.net/img/general/'; 
				suffix = '/48623284_fqbPs5xy6jImyJu6U2w_xkkR7lilKCVfZEE8qSC66WU.jpg';
			} else {
				prefix = event.venue.photos.groups[0].items[0].prefix;
				suffix = event.venue.photos.groups[0].items[0].suffix;
			}
			return (
				<CardEvent 
				key={index}
				prefix={prefix} 
				suffix={suffix}
				title={event.venue.name}
				rating={event.venue.rating}/>
			)
		});

				

		return (
				<div className='row'>
					<h3 className='category-title'>Outdoor</h3>
					<div className='category-wrapper'>
						{outdoorList}
						<button className="nextArrow-button" id='outdoor-button' type='button' onClick={this.onNext}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
								<path fillRule="evenodd" d="M4.293 1.707A1 1 0 1 1 5.708.293l7.995 8a1 1 0 0 1 0 1.414l-7.995 8a1 1 0 1 1-1.415-1.414L11.583 9l-7.29-7.293z">
								</path>
							</svg>
						</button>
					</div>
				</div>
		)

	}
});

var mapStateToProps = function(state, props) {
	return {
		outdoor: state.outdoor,
		subOutdoor: state.subOutdoor
	}
};



const Container = connect(mapStateToProps)(Outdoor);

module.exports = Container;
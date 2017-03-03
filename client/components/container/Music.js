const React = require('react');
const CardEvent = require('../cardEvent');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');



const Music = React.createClass({

	componentWillMount: function() {
		this.props.dispatch(actions.fetchMusic('40.7,-74'));
	},

	render: function() {
		let musicList = this.props.music.map((event,index) => {
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
					<h1>Music</h1>
					{musicList}
				</div>
		)

	}
});

let mapStateToProps = function(state, props) {
	return {
		music: state.music
	}
};



const Container = connect(mapStateToProps)(Music);

module.exports = Container;
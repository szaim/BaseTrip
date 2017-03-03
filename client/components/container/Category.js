const React = require('react');
const CardEvent = require('../cardEvent');
const connect = require('react-redux').connect;
const actions = require('../../redux/action');



const Category = React.createClass({

	render: function() {

		let cardList = this.props.cards.map((event,index) => {
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
			<div>
				{cardList}
			</div>

		)

	}
});

var mapStateToProps = function(state, props) {
	return {
		cards: state.categorySearch
	}
};

const Container = connect(mapStateToProps)(Category);

module.exports = Container;
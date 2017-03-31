const Categories = require('./container/Categories');
const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../redux/action');
const Header = require('./header');
const Search = require('./container/Search');
const Footer = require('./footer');

let location;




const Home = React.createClass({

	componentWillMount: function() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					location = Math.round(position.coords.latitude) + ',' + Math.round(position.coords.longitude);
					console.log('location from geo before', location);
							this.props.dispatch(actions.fetchFood(location));
							this.props.dispatch(actions.fetchNightLife(location));
							this.props.dispatch(actions.fetchOutdoor(location));
				});
			} else { 
			x.innerHTML = "Geolocation is not supported by this browser.";
			}

		console.log('location from geo', location);

	},
	render: function() {
		return (
		<div>
			<Header />
			<div className="container body-container">
				<div>
					<p className="textHeader-paragraph">
						<span className="textHeader">Looking for places to go?</span> Find interesting stuff happenning in your area.
					</p>
				</div>
				<Search />
				<Categories />
			</div>
			<Footer directLink='http://localhost:8080/' brandName='Base Trip' />
		</div>
		)
	}
});


const Container = connect()(Home);

module.exports = Container;


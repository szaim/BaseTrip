const Categories = require('./container/Categories');
const React = require('react');
const connect = require('react-redux').connect;
const actions = require('../redux/action');
const Header = require('./header');
const Search = require('./container/Search');
const Footer = require('./footer');
const Loader = require('./loader');

let location;


const Home = React.createClass({
	getInitialState: function() {
		return {
			loading: true
		};
	},

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
			
			setTimeout(() => {
				this.setState({loading: false});
			}, 9000);
		

	},
	render: function() {
		let content = this.state.loading ? <Loader brandName='BaseTrip' /> : 
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
			<Footer directLink='https://blooming-ocean-74461.herokuapp.com/' brandName='Base Trip' />
		</div>
		return (
			<div>{content}</div>
		)
	}
});


const Container = connect()(Home);

module.exports = Container;


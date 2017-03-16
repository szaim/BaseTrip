const React = require('react');
const Provider = require("react-redux").Provider;
const store = require("../redux/store");
const router = require('react-router');
const Router = router.Router;
const Route = router.Route;
const IndexRoute = router.IndexRoute;
const hashHistory = router.hashHistory;
const Link = router.Link;
const App = require('../components/app');
const Home = require('../components/home');
const EventDetails = require('../components/container/eventDetails');






const routes = (
	<Provider store={store}>
    <Router history={hashHistory}>
    	<Route path="/" component={App}>
	        <IndexRoute component={Home} />
        <Route path="/eventDetails" component={EventDetails} />
      </Route>
    </Router>
    </Provider>
);


module.exports = routes;
const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./redux/store');
const Provider = require('react-redux').Provider;
const Category = require('./components/container/Category');
const Home = require('./components/home');
const EventDetails = require('./components/container/eventDetails');
require('./CSS/styles.css');
const routes = require('./routes/routes');

// const App = React.createClass({
//    render: function() {
//         return (
//             <div>
//                 <EventDetails />
//             </div>
//         );
//    }

// });




document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    	routes,
    	document.getElementById('app'));
});

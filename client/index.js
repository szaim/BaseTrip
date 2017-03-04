const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./redux/store');
const Provider = require('react-redux').Provider;
const Search = require('./components/container/Search');
const Category = require('./components/container/Category');
const Home = require('./components/home');
require('./CSS/styles.css');


const App = React.createClass({
   render: function() {
        return (
            <div>
                <Search />
                <Home />

            </div>
        );
   }

});




document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    <Provider store={store}>
    	<App />
    </Provider>,
    	document.getElementById('app'));
});

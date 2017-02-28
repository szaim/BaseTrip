var React = require('react');
var ReactDOM = require('react-dom');
var store = require('./redux/store');
var Provider = require('react-redux').Provider;



var App = React.createClass({
   render: function() {
        return (
            <div>
                hello
            </div>
        );
   }

});
// var routes = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );
ReactDOM.render(<App />, document.getElementById('app'));

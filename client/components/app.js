const React = require('react');


const App = function(props) {
        return (
            <div>
                {props.children}
            </div>
        );
   }

module.exports = App;
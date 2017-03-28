const React = require('react');

const Header = React.createClass({
	render: function() {
		return (
             <div className="row">
                    <header className="header">
                        <div className="header-wrapper">
                        	<a  className="brandName" href="#">BaseTrip</a>
                        </div>
                    </header>
                </div>

		)
	}

});

module.exports = Header;


const React = require('react');

const Header = React.createClass({
	render: function() {
		return (
             <div class="row">
                    <header className="header">
                        <div className="header-wrapper">
                        	<a  className="brandName" href="#">BaseTrip</a>
                            <span className="navbar-brand pull-sm-right m-r-0 left-navbar">Log In</span>
                            <span className="navbar-brand pull-sm-right m-r-0 ">Sign Up</span>
                        </div>
                    </header>
                </div>

		)
	}

});

module.exports = Header;


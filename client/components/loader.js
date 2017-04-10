const React = require('react');

const Loader = function(props) {
	return (
		<div className="loader-container">
                <span className="loader">{props.brandName}</span> <br/>
                <i className="fa fa-spinner fa-spin fa-3x"></i>
        </div>
		)
}

module.exports = Loader;
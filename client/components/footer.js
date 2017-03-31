const React = require('react');

const Footer = function(props) {
	return (
		<div className="footer-container">
		<hr/>
            <footer className="footer">
                <div className="footer-wrapper">
                	<a  className="brandName-footer" href={props.directLink}>{props.brandName}</a>
                </div>
            </footer>
        </div>
		)
}

module.exports = Footer;
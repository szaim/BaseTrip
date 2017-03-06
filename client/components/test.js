const React = require('react');
const connect = require('react-redux').connect;
const $ = require('jQuery');
const lightSlider = require('lightslider');



const Test = React.createClass({

	render: function() {
	$('#lightSlider').lightSlider({
    gallery: true,
    item: 5,
    loop: true,
    slideMargin: 0,
    thumbItem: 9
});

		return (
				<div className="demo">
    <ul id="lightSlider">
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-1.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-1.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-2.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-2.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-3.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-3.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-4.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-4.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-5.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-5.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-6.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-6.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-7.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-7.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-8.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-8.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-9.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-9.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-10.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-10.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-11.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-12.jpg" />
        </li>
        <li data-thumb="http://sachinchoolur.github.io/lightslider/img/thumb/cS-13.jpg">
            <img src="http://sachinchoolur.github.io/lightslider/img/cS-13.jpg" />
        </li>
    </ul>
</div>
		)
	}
});




const Container = connect()(Test);

module.exports = Container;
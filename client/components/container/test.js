
var React = require('react');
var Slider = require('react-slick');


var DemoSlider = React.createClass({
	getSlides(count) {
  	var slides = [];
  	for(var i = 0; i < count; i++) {
    	slides.push((<img key={i} src='http://placekitten.com/g/400/200' />));
    }
    return slides;
  },

  render: function() {
  	var settings = {
    	dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3
    }
    
    var slides = this.getSlides(this.props.count);
    
    return (
    	<div className='container'>
      	<Slider {...settings}>
        	{ slides }
        </Slider>
      </div>
    );
  }
});

var ReactSlickDemo = React.createClass({ 
	getInitialState() {
  	return {
	    count: 20
    }
  },
  setSlides() {
  	this.setState({
    	count: Math.ceil(Math.random(0, 1) * 30)
    })
  },
	render: function() {
  	return (<div>
          	<h2>{ this.state.count } slides</h2>
    	<DemoSlider key={Date.now()} count={this.state.count}/>
      <button onClick={this.setSlides}>Click</button>
    </div>)
  }
})



module.exports = DemoSlider;
module.exports = ReactSlickDemo;

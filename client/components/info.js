const React = require('react');



const Info = function(props) {
	return (
		<div className='row eventDetail-container'>
			<div className='col-xs-9 event-info'>
				<h1>{props.name}</h1>
				<span>{props.location}</span>
				<br/>
				<div className='row tips-content'>
					<span className='col-xs-1'>Tips</span>
					<p className='col-xs-10'>{props.tips}</p>
				</div>
				<div className='row tips-content review-section'>
					<span className='col-xs-1'>Review</span>
					<div className='col-xs-10 review-wrapper'>
						<div className='anonymous-icon'></div>
						<p className='review-text'>{props.summary}</p>
					</div>
				</div>

			</div>
			<div className='image-container'>
				<img src={`${props.prefix}300x500${props.suffix}`} />
				<span className='eventDetail-rating'>{props.rating}</span>
			</div>
		</div>
	)
};


module.exports = Info;
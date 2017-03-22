const React = require('react');



const Info = function(props) {
	return (
		<div className='row eventDetail-container'>
			<div className='col-xs-9 event-info'>
				<h1>{props.name}</h1>
				<span>{props.location.city}</span>
				<br/>
				<div className='row tips-content'>
					<span className='col-xs-1'>Tips</span>
					<p className='col-xs-10'>{props.tips}</p>
				</div>
				<div className='row tips-content content-section'>
					<span className='col-xs-1'>Info</span>
					<div className='col-xs-10 content-wrapper'>
						<ul className='info-list'>
							<li><p className='content-text'><span id='address' className='info-list-category'>Address</span>{props.location.formattedAddress[0]} <br/>
							        <p className='line2-address'>{props.location.formattedAddress[1]}</p></p>
							</li>
							<li><p className='content-text'><span id='phone' className='info-list-category'>Phone</span>{props.contact.formattedPhone}</p></li>
							<li><span id='website' className='info-list-category'>Website</span><a href='{props.url}' className='content-text'>{props.url}</a></li>
						</ul>
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
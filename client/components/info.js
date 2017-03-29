const React = require('react');
import Rating from 'react-rating-system';

const Info = function(props) {
	let style = {
		height: 500,
		width: 300,
		backgroundSize: 'cover',
		backgroundImage: `url(${props.prefix}300x500${props.suffix})`
	};

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
							        <span className='line2-address'>{props.location.formattedAddress[1]}</span></p>
							</li>
							<li><p className='content-text'><span id='phone' className='info-list-category'>Phone</span>{props.contact.formattedPhone}</p></li>
							<li><span id='website' className='info-list-category'>Website</span><a href={props.url} className='content-text' target='_blank'>{props.url}</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className='image-container'>
				<div style={style} >
				</div>
				<Rating image="https://raw.githubusercontent.com/enzoferey/react-rating-system/master/dist/star2.png" fillBG="#f1c40f" initialBG="#6a6a6a" numberStars={5} initialValue={4} editable={false} containerStyle={{ maxWidth: '100px' }}/>

			</div>
		</div>
	)
};


module.exports = Info;
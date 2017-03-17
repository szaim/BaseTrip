const React = require('react');



const Info = function(props) {
	return (
		<div>
			<div>
				<h1>{props.name}</h1>
				<span>{props.location}</span>
				<br/>
				<div>
					<span>About Place</span>
					<p>{props.tips}</p>
				</div>

			</div>
			<div>
				<img src={`${props.prefix}300x500${props.suffix}`} />
				<span>{props.rating}</span>
			</div>
		</div>
	)
};


module.exports = Info;
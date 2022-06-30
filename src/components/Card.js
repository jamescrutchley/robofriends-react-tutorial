import React from 'react';
 

const Card = (props) => {
	// option to destructure:
	// const {name, email, id} = props;
	// then pass in props without having to prepend with .props
	// OR simply pass in prop names as params ie. ({name,email,id}) => ....
	return (
		<div className="test glow tc dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="pb3" alt='robot' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2> {props.name} </h2>
				<p> {props.email} </p>
			</div>
		</div>
	);
}	

export default Card;
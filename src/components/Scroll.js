import React from 'react';
 
// Scroll is a parent component, but isn't its own thing. 
// weird jsx syntax coming up...


const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border:'none', height:'1000px'}}> 
		{props.children}
		</div>
		)
};

export default Scroll;
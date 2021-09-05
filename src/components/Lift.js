import React, { useState } from "react";

const Lift = (liftN, open, currentLiftHeight) => {
	const LiftDoorStyle = {
		width: `${open}%`,
		transition: `width 1s linear`
	};
	const LiftContStyle = {
		display: "inline-block",
		border: "3px solid black",
		width: "50px",
		float: "center",

		/* height: 100px; */
		/* position: relative; */
		position: "relative",
		/* left: 50%; */
		boxSizing: "content-box",
		/* margin:0 1rem; */
		/* bottom: 10vh; */
		bottom: `${currentLiftHeight}px`,
		transition: `bottom 1s cubic-bezier(1, 0.03, 0.38, 1.04)`
	};
	console.log(liftN);
	return (
		<div style={LiftContStyle} key={liftN}>
			<div className='door' style={LiftDoorStyle}></div>
		</div>
	);
};

export default Lift;

// import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import EachFloor from "./EachFloor.js";
import { useState } from "react";
import { ReactComponent as YourSvg } from "./lift-elevator.svg";
import Lift from "./Lift";

const Header = () => {
	const TotalFloors = 4;
	const [currentFloor, setCurrentFloor] = useState(1);
	const [currentLiftHeight, setCurrentLiftHeight] = useState(0);
	const [open, setOpen] = useState(100);
	// const [close, setclose] = useState(0);

	const clickedFloor = (Floor) => {
		if (mystyle.width === "0%") {
			setOpen(100);
			setTimeout(() => setCurrentLiftHeight((Floor - 1) * 100), 1500);
			// setCurrentLiftHeight((Floor - 1) * 100);
			setCurrentFloor(Floor);
		} else if (mystyle.width === "100%") {
			setCurrentLiftHeight((Floor - 1) * 100);
			setTimeout(() => setOpen(0), 1500);
			// setOpen(0);
			setCurrentFloor(Floor);
		}
		console.log(currentLiftHeight);
		console.log(Floor - 1);
	};
	// let style = { bottom: `${currentLiftHeight}vh`,width:`${}`,
	// 				transition: `bottom ${TimeTaken}s linear width ` };
	const FloorList = [...Array(TotalFloors + 1).keys()].slice(1).reverse();
	// console.log(FloorList);
	const TimeTaken = () => {
		return 2;
	};
	const mystyle = {
		width: `${open}%`,
		transition: `width 1s linear`
	};
	return (
		<Container className='floorContainer'>
			{FloorList.map((Floor) => {
				return (
					<EachFloor
						Floor={Floor}
						TotalFloors={TotalFloors}
						clickedFloor={clickedFloor}
						currentFloor={currentFloor}
					/>
				);
			})}
			<div
				className='lift_container'
				style={{
					bottom: `${currentLiftHeight}px`,
					transition: `bottom 1s cubic-bezier(1, 0.03, 0.38, 1.04)`
				}}>
				<div className='door' style={mystyle}></div>
			</div>
			<div className='link'>
				<Button
					href='http://www.google.com'
					className='btn btn1'
					variant='light'>
					Source code
				</Button>
			</div>
		</Container>
	);
};

export default Header;

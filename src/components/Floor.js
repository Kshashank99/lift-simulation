// import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import EachFloor from "./EachFloor.js";
import { useState } from "react";
import { ReactComponent as YourSvg } from "./lift-elevator.svg";
import Lift from "./Lift";

const Header = () => {
	const TotalFloors = 10;
	const [totalLift, setTotalLift] = useState(3);
	const [currentFloor, setCurrentFloor] = useState(1);
	const [currentLiftHeight, setCurrentLiftHeight] = useState(0);
	const [open, setOpen] = useState(100);
	const [right, setright] = useState(true);
	// const [close, setclose] = useState(0);

	const clickedFloor = (Floor) => {
		if (LiftDoorStyle.width === "0%") {
			setOpen(100);
			setTimeout(() => setCurrentLiftHeight((Floor - 1) * 100), 1500);
			// setCurrentLiftHeight((Floor - 1) * 100);
			setCurrentFloor(Floor);
		} else if (LiftDoorStyle.width === "100%") {
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
	const totalLiftarr = [...Array(totalLift).keys()];
	// console.log(FloorList);
	const TimeTaken = () => {
		return 2;
	};
	// const LiftDoorStyle = {
	// 	width: `${open}%`,
	// 	transition: `width 1s linear`
	// };
	// const LiftContStyle = {
	// 	bottom: `${currentLiftHeight}px`,
	// 	transition: `bottom 1s cubic-bezier(1, 0.03, 0.38, 1.04)`
	// };
	// const [right, setright] = useState(1);
	console.log(totalLiftarr);
	const LiftDoorStyle = {
		width: `${open}%`,
		transition: `width 1s linear`
	};
	const LiftContStyle = {
		display: "inline-block",
		border: "3px solid black",
		width: "50px",
		// float: "center",

		/* height: 100px; */
		/* position: relative; */
		position: "absolute",
		/* left: 50%; */
		boxSizing: "content-box",
		/* margin:0 1rem; */
		/* bottom: 10vh; */
		bottom: `${currentLiftHeight}px`,
		transition: `bottom 1s cubic-bezier(1, 0.03, 0.38, 1.04)`
		// left: `${liftNo * 10}%`
	};

	return (
		<>
			<Container className='btn-orient'>
				<span style={{ marginRight: "10px" }}>Button orientation </span>
				<Button
					className='btn2 btn2_1'
					variant='success'
					// style={{ display: right ? "flex" : "none" }}
					// variant='primary'
					onClick={() => setright(false)}>
					Left
				</Button>
				<Button
					className='btn2 btn2_2'
					variant='warning'
					// style={{ display: right ? "none" : "flex" }}
					// color='primary'
					// variant='warning'
					onClick={() => setright(true)}>
					right
				</Button>
			</Container>
			<Container className='floorContainer'>
				{FloorList.map((Floor) => {
					return (
						<EachFloor
							className='lift_container'
							Floor={Floor}
							TotalFloors={TotalFloors}
							clickedFloor={clickedFloor}
							currentFloor={currentFloor}
							flexRight={right}
						/>
					);
				})}
				{totalLiftarr.map((liftNo) => {
					return (
						<div id={`lift${liftNo}`} style={LiftContStyle}>
							<div className='door' style={LiftDoorStyle}></div>
						</div>
					);
				})}
				{/* </div> */}
			</Container>
			<div className='link'>
				<Button
					href='https://github.com/Kshashank99/lift-simulation'
					className='btn btn1'
					variant='light'>
					Source code
				</Button>
			</div>
		</>
	);
};

export default Header;

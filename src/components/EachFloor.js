import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const EachFloor = ({ Floor, TotalFloors, clickedFloor, currentFloor }) => {
	// console.log("floor no." + Floor);

	return (
		<>
			<Container className='floor '>
				<div className='floor__line'>
					{Floor !== TotalFloors ? (
						<Button
							className='btn '
							variant='outline-success'
							onClick={() => clickedFloor(Floor)}>
							up
						</Button>
					) : null}
					<br />
					{Floor <= TotalFloors && Floor !== 1 ? (
						<Button
							className='btn '
							variant='outline-warning'
							onClick={() => clickedFloor(Floor)}>
							down
						</Button>
					) : null}
				</div>
				<br />
				<div className='text'>Floor {Floor}</div>
			</Container>
			<div className='line'></div>
		</>
	);
};

export default EachFloor;

// import React from "react";
import { Navbar, Container } from "react-bootstrap";
const Header = () => {
	return (
		<Navbar bg='dark' className='headerNav'>
			<Container
				style={{ display: "flex", justifyContent: "center", color: "white" }}>
				<h2>Lift Simulation</h2>
				{/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
			</Container>
		</Navbar>
	);
};

export default Header;

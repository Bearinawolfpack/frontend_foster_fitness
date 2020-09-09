import React from "react";
import "./css/components.css"
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

const Jumbotron = () => (
	<Jumbo fluid className="home-jumbo">
		<div className="overlay"></div>
		<Container id="center-jumbo-content">
			<h1 className="gym-text">Foster Fitness</h1>
			<p>
				This Place Shall Never Be With Those Cold And Timid Souls Who
				Neither Know Victory Nor Defeat!
			</p>
		</Container>
	</Jumbo>
);

export default Jumbotron;

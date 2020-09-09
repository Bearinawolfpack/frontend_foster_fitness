import React from "react";
import "../css/cards.css";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

const WorkoutJumbotron = (props) => (
	<Jumbo fluid className="workout-jumbo">
		<div className="overlay"></div>
		<Container id="center-jumbo-content">
			<h3>Today is {props.wod.date} and the Workout for today is:</h3>
			<h1 className="gym-text">"{props.wod.name}"</h1>
			<h3>{props.wod.wod}</h3>
			Summary: <h5>{props.wod.description}</h5>
		</Container>
	</Jumbo>
);

export default WorkoutJumbotron;

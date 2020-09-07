import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import corey_standing_bw from "../../assets/corey_standing_bw.jpeg";

const Styles = styled.div`
	.jumbo {
		background: url(${corey_standing_bw}) no-repeat fixed bottom;
		background-size: cover;
		color: #ccc;
		height: 30rem;
		position: relative;
		z-index: -2;
		margin-bottom: 0px;
	}

	.overlay {
		background-color: #000;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
	h1 {
		color: #fcba03;
	}
`;


const WorkoutJumbotron = (props) => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay" ></div>
			<Container id="center-jumbo-content">
				<h3>Today is {props.wod.date} and the Workout for today is:</h3>
				<h1>"{props.wod.name}"</h1>
				<h3>{props.wod.wod}</h3>
				Summary: <h5>{props.wod.description}</h5>
			</Container>
		</Jumbo>
	</Styles>
);

export default WorkoutJumbotron;

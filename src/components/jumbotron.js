import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import cfAmbience from "../assets/cf_ambience.jpg";

const Styles = styled.div`
	.jumbo {
		background: url(${cfAmbience}) no-repeat fixed bottom;
		background-size: cover;
		color: #ccc;
		height: 200px;
		position: relative;
		z-index: -2;
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

const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container id="center-jumbo-content">
				<h1>Foster Fitness</h1>
				<p>
					This Place Shall Never Be With Those Cold And Timid Souls
					Who Neither Know Victory Nor Defeat!
				</p>
				<Button variant="dark">Get Started</Button>
			</Container>
		</Jumbo>
	</Styles>
);

export default Jumbotron;

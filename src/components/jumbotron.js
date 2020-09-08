import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import cfAmbience from "../assets/cf_ambience.jpeg";

const Styles = styled.div`
	.jumbo {
		background: url(${cfAmbience}) no-repeat fixed bottom;
		background-size: cover;
		color: #ccc;
		height: 200px;
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

const Jumbotron = () => {
	
	let clickHandler = (event) => {
		// return <Redirect to="/contact"/>
		console.log(event)
	}
	
	return(
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container id="center-jumbo-content">
				<h1>Foster Fitness</h1>
				<p>
					This Place Shall Never Be With Those Cold And Timid Souls
					Who Neither Know Victory Nor Defeat!
				</p>			
			</Container>
		</Jumbo>
	</Styles>
	)
};

export default Jumbotron;

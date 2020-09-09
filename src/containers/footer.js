import React from "react";
import "./css/containers.css";
import Map from "../components/map";
import GymContact from "../components/gym_contact";
import Signup from "../components/forms/signup_form";
import { Row, Col } from "react-bootstrap";

const Footer = () => (
	<div className="gym-color">
		<Map />
		<Row>
			<Col>
				<GymContact />
			</Col>
			<Col>
				<Signup />
			</Col>
		</Row>
	</div>
);

export default Footer;

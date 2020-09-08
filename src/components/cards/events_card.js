import React from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const EventCard = (props) => (
	<Col>
		<Card style={{ width: "50 rem", border: "0px solid rgba(0,0,0,.7)", marginTop: "30px", marginBottom: "30px", backgroundColor: "rgba(0,0,0,.5)" }}>
			<Card.Title style={{ color: "#fcba03" }} >{props.event.name}</Card.Title>
			<Card.Img
				variant="top"
				src={props.event.picture}
				alt="Wodapalooza event"
			/>
			<Card.Text style={{ color: "#fcba03" }} >{props.event.description}</Card.Text>
			<Button variant="link">
				<a href={props.event.url}>More Information</a>
			</Button>
		</Card>
	</Col>
);



export default EventCard;

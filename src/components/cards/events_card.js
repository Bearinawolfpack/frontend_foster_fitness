import React from "react";
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const EventCard = (props) => (
	<Col>
		<Card style={{ width: "50 rem" }}>
			<Card.Title>{props.event.name}</Card.Title>
			<Card.Img
				variant="top"
				src={props.event.picture}
				alt="Wodapalooza event"
			/>
			<Card.Text>{props.event.description}</Card.Text>
			<Button variant="link">
				<a href={props.event.url}>More Information</a>
			</Button>
		</Card>
	</Col>
);



export default EventCard;

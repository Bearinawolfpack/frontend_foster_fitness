import React from "react";
import "../css/cards.css"
import { Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const EventCard = (props) => (
	<Col>
		<Card className="event-card">
			<Card.Title className="gym-text" >{props.event.name}</Card.Title>
			<Card.Img
				variant="top"
				src={props.event.picture}
				alt="Wodapalooza event"
			/>
			<Card.Text className="gym-text" >{props.event.description}</Card.Text>
			<Button variant="link">
				<a href={props.event.url}>More Information</a>
			</Button>
		</Card>
	</Col>
);



export default EventCard;

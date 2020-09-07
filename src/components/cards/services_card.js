import React from "react";
import { Card, Col } from "react-bootstrap";

const ServicesCard = (props) => (
	<Col>
		<Card
			border="warning"
			bg="transparent"
			style={{ width: "18rem", border: "0px solid rgba(0,0,0,.125)" }}
		>
			<Card.Body style={{backgroundColor: "rgba(0,0,0,.5)"}}>
				<Card.Title as="h1" style={{ color: "#fcba03" }}>
					{props.service.price}
				</Card.Title>
				<Card.Subtitle
					as="h3"
					style={{ color: "#fcba03" }}
					className="mb-3"
				>
					{props.service.name}
				</Card.Subtitle>
				<Card.Text as="h5" style={{ color: "#fcba03" }}>
					{props.service.description}
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>
);

export default ServicesCard;

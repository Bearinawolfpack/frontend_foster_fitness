import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const CoachCard = (props) => (
	<Col>
		<nav>
			<Link to={`/coach/${props.coach.id}`}>
				<Card style={{ width: "18rem" }}>
					<Card.Img
						src={props.coach.picture}
						alt="Foster Fitness Coach"
						width="300"
						height="300"
					/>

					<Card.Body>
						<Card.Title>{props.coach.name}</Card.Title>
						<Card.Text>{props.coach.bio}</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</nav>
	</Col>
);

export default CoachCard;

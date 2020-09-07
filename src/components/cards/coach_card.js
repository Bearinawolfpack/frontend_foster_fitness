import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";


const CoachCard = (props) => (
	<Col>
		<nav>
			<Link to={`/coach/${props.coach.id}`}>
				<Card bg="transparent" style={{ width: "18rem", border: "0px solid rgba(0,0,0,.125)", marginTop: "30px" }}>
					<Card.Img
						src={props.coach.picture}
						alt="Foster Fitness Coach"
						width="300"
						height="300"
					/>
					<Card.Body style={{backgroundColor: "rgba(0,0,0,.5)"}}>
						<Card.Title style={{ color: "#fcba03" }}>{props.coach.name}</Card.Title>
						<Card.Text style={{ color: "#fcba03" }}>{props.coach.bio}</Card.Text>

					</Card.Body>
				</Card>
			</Link>
		</nav>
	</Col>
);

export default CoachCard;

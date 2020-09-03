import React from "react";
import Layout from "../layout";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CoachCard = (props) => (
	<React.Fragment>
		<Layout>
			<Card style={{ width: "18rem" }}>
				<nav>
					<Link to={`/coach/${props.coach.id}`}>
						<Card.Img
							src={props.coach.picture}
							alt="Foster Fitness Coach"
							width="300"
							height="300"
						/>
					</Link>
				</nav>
				<Card.Body>
					<Card.Title>{props.coach.name}</Card.Title>

					<Card.Text>{props.coach.bio}</Card.Text>
				</Card.Body>
			</Card>
		</Layout>
	</React.Fragment>
);

export default CoachCard;

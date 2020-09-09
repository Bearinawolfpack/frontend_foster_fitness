import React from "react";
import "./css/containers.css"
import CoachCard from "../components/cards/coach_card";
import { Row, Container } from "react-bootstrap";

class Coach extends React.Component {
	state = { stateCoaches: [] };

	componentDidMount() {
		fetch("http://localhost:3000/coaches")
			.then((resp) => resp.json())
			.then((coaches) => this.setState({ stateCoaches: coaches }));
	}

	render() {
		let coaches = this.state.stateCoaches.map((coach) => (
			<CoachCard coach={coach} key={coach.id} />
		));

		return (
			<div className="coach-bg">
				<Container >
					<Row xs={1} md={2} lg={3}>
						{coaches}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Coach;

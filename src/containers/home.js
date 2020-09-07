import React from "react";
import Workout from "./workout";
import Pricing from "./pricing";
import Jumbotron from "../components/jumbotron";
import Calendar from "../components/calendar";
import CoachCard from "../components/cards/coach_card";
import { Container, Row } from "react-bootstrap";

class Home extends React.Component {
	state = {
		classCoaches: [],
		stateCoaches: [],
	};

	componentDidMount() {
		fetch("http://localhost:3000/coaches")
			.then((resp) => resp.json())
			.then((coaches) => this.setState({ classCoaches: coaches }));
	}

	render() {
		let displayCoaches = this.state.classCoaches.slice(0, 3);
		let coaches = displayCoaches.map((coach) => (
			<CoachCard coach={coach} key={coach.id} />
		));
		return (
			<React.Fragment>
				<Jumbotron />
				<div style={{ backgroundColor: "#fcba03" }}>
					<Container >
                        <h3>Meet Our Coaches:</h3>
						<Row xs={1} md={2} lg={3}>
							{coaches}
						</Row>
					</Container>
				</div>
				<Workout />
                <div style={{ backgroundColor: "#fcba03" }}>
				<Calendar />
                </div>
				<Pricing />
			</React.Fragment>
		);
	}
}

export default Home;

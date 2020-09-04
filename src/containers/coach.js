import React from "react";
import CoachCard from "../components/cards/coach_card";
import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import sunny_foster from "../assets/sunny_foster.jpeg";

const Wrapper = styled.div`
    background-image: url(${sunny_foster});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 100%;
`;

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
			<Wrapper >
				<Container >
					<Row xs={1} md={2} lg={3}>
						{coaches}
					</Row>
				</Container>
			</Wrapper>
		);
	}
}

export default Coach;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import standing_bw_high from "../../assets/cf_ambience.jpeg";

const Wrapper = styled.div`
	background-image: url(${standing_bw_high});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	height: 100%;
`;

class ShowCoach extends React.Component {
	state = { stateCoach: {} };

	componentDidMount() {
		fetch(`http://localhost:3000/coaches/${this.props.match.params.id}`)
			.then((resp) => resp.json())
			.then((coach) => this.setState({ stateCoach: coach }));
	}

	render() {
		return (
			<Wrapper>
				<Row>
					<Col style={{ paddingBottom: "50px", marginTop: "50px",marginLeft: "50px"}}>
					<img
						src={this.state.stateCoach.picture}
						alt="Foster Fitness Coach"
						width="500"
						height="500"
					/>
					</Col>
					<Col style={{ paddingTop: "50px", backgroundColor: "rgba(0,0,0,.5)" }} >
						<h3 style={{ color: "#fcba03" }} >{this.state.stateCoach.name}</h3>
						<p style={{ color: "#fcba03" }} >{this.state.stateCoach.bio}</p>
					</Col>
				</Row>
			</Wrapper>
		);
	}
}

export default ShowCoach;

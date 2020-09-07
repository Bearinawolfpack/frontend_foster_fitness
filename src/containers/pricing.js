import React from "react";
import ServicesCard from "../components/cards/services_card";
import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import bottom_rings_bw from "../assets/bottom_rings_bw.jpeg";

const Wrapper = styled.div`
	background-image: url(${bottom_rings_bw});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	height: 40rem;
`;

class Pricing extends React.Component {
	state = { stateService: [] };

	componentDidMount() {
		fetch("http://localhost:3000/services")
			.then((resp) => resp.json())
			.then((services) => this.setState({ stateService: services }));
	}
	render() {
		let gymServices = this.state.stateService.map((service) => (
			<ServicesCard service={service} key={service.id} />
		));

		return (
			<Wrapper>
				<Container>
					<Row xs={1} md={2} lg={3}>
						{gymServices}
					</Row>
				</Container>
			</Wrapper>
		);
	}
}

export default Pricing;

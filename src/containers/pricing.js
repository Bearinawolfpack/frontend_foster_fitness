import React from "react";
import "../App.css"
import ServicesCard from "../components/cards/services_card";
import { Row, Container } from "react-bootstrap";

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
			<div className="bg-format rings-bw img-adjust">
				<Container>
					<Row xs={1} md={2} lg={3}>
						{gymServices}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Pricing;

import React from "react";
import "../App.css";
import Calendar from "../components/calendar";
import Events from "../components/events";
import { Row, Container } from "react-bootstrap";

const Schedule = () => (
	<div className="bg-format rings-bw2">
		<Container>
			<Row>
				<Calendar />
			</Row>
			<Row xs={1} md={2} lg={3}>
				<Events />
			</Row>
		</Container>
	</div>
);

export default Schedule;

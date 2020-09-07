import React from "react";
import Calendar from "../components/calendar";
import Events from "../components/events";
import { Row, Container } from "react-bootstrap";
import styled from "styled-components";
import ring_pano_bw2 from "../assets/ring_pano_bw2.jpeg";

const Wrapper = styled.div`
	background-image: url(${ring_pano_bw2});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	height: 100%;
`;

const Schedule = () => (
	<Wrapper>
		<Container>
			<Row>
				<Calendar />
			</Row>
			<Row xs={1} md={2} lg={3}>
				<Events />
			</Row>
		</Container>
	</Wrapper>
);

export default Schedule;

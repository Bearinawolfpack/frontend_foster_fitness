import React from "react";
import Layout from "../layout";
import Button from 'react-bootstrap/Button'

const EventCard = (props) => (
	<Layout>
		<h3>{props.event.name}</h3>
		<img
			src={props.event.picture}
			alt="Wodapalooza event"
			width="800"
			height="500"
		/>
		<p>{props.event.description}</p>
        <Button variant="link"><a href={props.event.url}>More Information</a></Button>
	</Layout>
);

export default EventCard;

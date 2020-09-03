import React from "react";
import Button from "react-bootstrap/Button";
import Layout from "../layout"

const AdminEventCard = (props) => {
	const clickListener = (id, str) => {
		props.clickHandler(id, str);
	};
	return (
		<Layout>
            <br/>
			<img
				src={props.event.picture}
				alt="Foster Fitness Event"
				width="250"
				height="250"
			/>
            <br/>
			<h6>{props.event.name}</h6>
			<p>{props.event.description}</p>
			<Button
				variant="danger"
				size="sm"
				onClick={() => clickListener(props.event.id, "Delete")}
			>
				Delete Event
			</Button>
			<Button
				variant="warning"
				size="sm"
				onClick={() => clickListener(props.event.id, "Edit")}
			>
				Edit Event
			</Button>
		</Layout>
	);
};

export default AdminEventCard;
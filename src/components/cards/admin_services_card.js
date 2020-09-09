import React from "react";
import Button from "react-bootstrap/Button";

const AdminServicesCard = (props) => {
	const clickListener = (id, str) => {
		props.clickHandler(id, str);
	};
	return (
		<>
			<h5>{props.service.price}</h5>
			<h6>{props.service.name}</h6>
			<p>{props.service.description}</p>
			<Button
				variant="danger"
				size="sm"
				onClick={() => clickListener(props.service.id, "Delete")}
			>
				Delete Service
			</Button>
			<Button
				variant="warning"
				size="sm"
				onClick={() => clickListener(props.service.id, "Edit")}
			>
				Edit Service
			</Button>
		</>
	);
};

export default AdminServicesCard;

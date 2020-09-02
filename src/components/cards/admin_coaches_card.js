import React from "react";
import Button from "react-bootstrap/Button";
import Layout from "../layout"

const AdminCoachesCard = (props) => {
	const clickListener = (id, str) => {
		props.clickHandler(id, str);
	};
	return (
		<Layout>
            <br/>
			<img
				src={props.coach.picture}
				alt="Foster Fitness Coach"
				width="250"
				height="250"
			/>
            <br/>
			<h6>{props.coach.name}</h6>
			<p>{props.coach.bio}</p>
			<Button
				variant="danger"
				size="sm"
				onClick={() => clickListener(props.coach.id, "Delete")}
			>
				Delete Coach
			</Button>
			<Button
				variant="warning"
				size="sm"
				onClick={() => clickListener(props.coach.id, "Edit")}
			>
				Edit Coach
			</Button>
		</Layout>
	);
};

export default AdminCoachesCard;

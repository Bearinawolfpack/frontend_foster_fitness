import React from "react";
import Layout from "../layout"

const WorkoutCard = (props) => (
	<Layout>
        <h3>Today is {props.wod.date} and the Workout for today is:</h3>
		<h1>"{props.wod.name}"</h1>
		<h3>{props.wod.wod}</h3>
		Summary: <h5>{props.wod.description}</h5>
	</Layout>
);

export default WorkoutCard;

import React from "react";
import Layout from "../components/layout";
import WorkoutEdit from "../components/forms/workout_edit"
import ServicesEdit from "../components/forms/services_edit"
import CoachesEdit from "../components/forms/coaches_edit"


class Admin extends React.Component {
	render() {
		return (
			<Layout>
				<h1> Admin Dashboard </h1>
                <WorkoutEdit/>
                <ServicesEdit/>
                <CoachesEdit/>
				<h3>Leads:</h3>
			</Layout>
		);
	}
}

export default Admin;

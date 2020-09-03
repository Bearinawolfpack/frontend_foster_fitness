import React from "react";
import Layout from "../components/layout";
import AdminUserCard from "../components/cards/admin_user_card";
import WorkoutEdit from "../components/forms/workout_edit";
import ServicesEdit from "../components/forms/services_edit";
import CoachesEdit from "../components/forms/coaches_edit";
import EventsEdit from "../components/forms/events_edit";

class Admin extends React.Component {
	state = { stateUsers: [] };

	componentDidMount() {
		fetch("http://localhost:3000/users")
			.then((resp) => resp.json())
			.then((users) => this.setState({ stateUsers: users }));
	}

	render() {
		let users = this.state.stateUsers.map((user) => (
			<AdminUserCard user={user} key={user.id} />
		));
		return (
			<Layout>
				<h1> Admin Dashboard </h1>
				<WorkoutEdit />
				<ServicesEdit />
				<CoachesEdit />
				<EventsEdit />
				<h3>Leads:</h3>
				{users}
			</Layout>
		);
	}
}

export default Admin;

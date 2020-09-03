import React from "react";
import Layout from "../layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminEventCard from "../cards/admin_event_card";

class EventsEdit extends React.Component {
	state = {
		name: "",
		description: "",
		picture: "",
		url: "",
		stateEvents: [],
	};

	componentDidMount() {
		fetch("http://localhost:3000/events")
			.then((resp) => resp.json())
			.then((events) => this.setState({ stateEvents: events }));
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	clickHandler = (id, str) => {
		if (str === "Delete") {
			this.deleteHandler(id);
		} else if (str === "Edit") {
			this.editHandler(id);
		}
	};

	deleteHandler = (id) => {
		let newStateEvents = this.state.stateEvents.filter(
			(event) => event.id !== id
		);
		fetch("http://localhost:3000/events/" + String(id), {
			method: "DELETE",
		}).then(this.setState({ stateEvents: newStateEvents }));
	};

	editHandler = (id) => {
		let event = this.state.stateEvents.find(
			(event) => event.id === id
		);
		this.setState({
			name: event.name,
			description: event.description,
			picture: event.picture,
		});
	};

	submitHandler = (event) => {
		event.preventDefault();

		fetch("http://localhost:3000/events", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				name: this.state.name,
				description: this.state.description,
				picture: this.state.picture,
				admin_id: 8,
			}),
		})
			.then(this.resetSignup)
			.then(() => this.componentDidMount());
	};

	resetSignup = () => {
		this.setState({
			name: "",
			description: "",
			picture: "",
			url: "",
		});
	};

	render() {
		let gymEvents = this.state.stateEvents.map((event) => (
			<AdminEventCard
				event={event}
				key={event.id}
				clickHandler={this.clickHandler}
			/>
		));
		return (
			<Layout>
				<h1>Current Events</h1>
				{gymEvents}
				<Form onSubmit={this.submitHandler}>
					<Form.Group role="form">
						<Form.Label>Events Edit Form:</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Name"
							value={this.state.name}
							onChange={this.changeHandler}
						/>
						<br />
						<Form.Control
							type="text"
							name="description"
							placeholder="About"
							value={this.state.description}
							onChange={this.changeHandler}
						/>
						<br />
						<Form.Control
							type="text"
							name="picture"
							placeholder="Image url"
							value={this.state.picture}
							onChange={this.changeHandler}
						/>
						<br />
						<Button variant="primary" type="submit">
							Add event
						</Button>
					</Form.Group>
				</Form>
			</Layout>
		);
	}
}

export default EventsEdit;
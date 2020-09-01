import React from "react";
import Layout from "../layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class WorkoutEdit extends React.Component {
	state = {
		name: "",
		date: "",
		wod: "",
		description: "",
	};

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitHandler = (event) => {
		event.preventDefault();

		fetch("http://localhost:3000/workouts/8", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({
				"name": this.state.name,
				"date": this.state.date,
				"wod": this.state.wod,
				"description": this.state.description
			}),
		})
			.then(this.resetSignup)
    };
    
    resetSignup = () => {
		this.setState({
			name: "",
			date: "",
			wod: "",
			description: "",
		});
	};

	render() {
		return (
			<Layout>
				<Form onSubmit={this.submitHandler}>
					<Form.Group role="form">
						<Form.Label>Workout Edit Form:</Form.Label>
						<Form.Control
							type="text"
							name="date"
							placeholder="Enter the date this workout is for..."
							value={this.state.date}
							onChange={this.changeHandler}
						/>
						<br />
						<Form.Control
							type="text"
							name="name"
							placeholder="Name of the Workout"
							value={this.state.name}
							onChange={this.changeHandler}
						/>
						<br />
						<Form.Control
							type="text"
							name="wod"
							placeholder="Enter Workout"
							value={this.state.wod}
							onChange={this.changeHandler}
						/>
						<br />
						<Form.Control
							type="text"
							name="description"
							placeholder="What is the purpose of this workout?"
							value={this.state.description}
							onChange={this.changeHandler}
						/>
						<br />
						<Button variant="primary" type="submit">
							Change WoD
						</Button>
					</Form.Group>
				</Form>
			</Layout>
		);
	}
}

export default WorkoutEdit;

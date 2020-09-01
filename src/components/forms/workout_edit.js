import React from "react";
import Layout from "../layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class WorkoutEdit extends React.Component {
    state={
        name: "",
        date: "",
        workout: "",
        description: ""
    }

    changeHandler = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }

    submitHandler = (event) => {
        event.preventDefault()
        // console.log(event)
    }

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
							name="workout"
							placeholder="Enter Workout"
							value={this.state.workout}
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
							Submit
						</Button>
					</Form.Group>
				</Form>
			</Layout>
		);
	}
}

export default WorkoutEdit;

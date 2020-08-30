import React from "react";
import Form from "react-bootstrap/Form";
import Layout from "../layout";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

class Signup extends React.Component {
	state = {
		name: "",
		email: "",
		phone: "",
		message: "",
	};

	changeHandler = (event) => {
		// console.log(event.target.value)
		// console.log(event.target.name)
		this.setState({ [event.target.name]: event.target.value });
	};

	resetSignup = () => {
		this.setState({
            name: "",
            email: "",
            phone: "",
            message: "",
        })
	};

	sendEmail = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				"gmail",
				"fosterfitness",
				event.target,
				"user_E5T6aWsRG4CXjTwS6gRyl"
			)
			.then(
				(result) => {
                    console.log(result.text);
                    this.resetSignup()
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	render() {
		return (
			<Layout>
                <Form onSubmit={this.sendEmail}>
                    <Form.Group role="form">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            value={this.state.name}
                            onChange={this.changeHandler}
                        />
                        <br />
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Enter Your Email"
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                        <br />
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            placeholder="Enter Your Phone Number"
                            value={this.state.phone}
                            onChange={this.changeHandler}
                        />
                        <br />
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            rows="3"
                            placeholder="Tell us what's on your mind..."
                            value={this.state.message}
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

export default Signup;

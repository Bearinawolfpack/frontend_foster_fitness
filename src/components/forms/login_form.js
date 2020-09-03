import React from "react";
import Layout from "../layout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect, Route } from "react-router-dom"

class LoginForm extends React.Component {
	state = {
		name: "",
		password: "",
        admin: [],
        history: [],
        loggedIn: false
    };
    
	componentDidMount() {
		fetch("http://localhost:3000/admins")
			.then((resp) => resp.json())
			.then((admin) => this.setState({ admin: admin }));
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	login = (event) => {
        event.preventDefault();
		if (
			this.state.admin[0].name === this.state.name &&
			this.state.admin[0].password === this.state.password
		) {
            this.setState(
				{ loggedIn: true }
			)
            console.log("Will redirect you to admin page momentarily", this.state.loggedIn);
			this.resetSignup();
		} else {
			alert("Please Try Again");
			this.resetSignup();
		}
	};

	resetSignup = () => {
		this.setState({
			name: "",
			password: "",
		});
	};

	render() {
        let loggedIn = this.state.loggedIn
        if(loggedIn){
            return <Redirect to="/admin"/>
        }

		return (
			<Layout>
				<h1>Login</h1>
				<Form onSubmit={this.login}>
					<Form.Group>
						<Form.Label>Name:</Form.Label>
						<Form.Control
							type="text"
							name="name"
							placeholder="Enter Your Name"
							value={this.state.name}
							onChange={this.changeHandler}
						/>
						<Form.Label>Password:</Form.Label>
						<Form.Control
							type="password"
							name="password"
							placeholder="Enter Your Password"
							value={this.state.password}
							onChange={this.changeHandler}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Layout>
		);
	}
}

export default LoginForm;

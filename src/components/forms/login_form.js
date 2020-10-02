import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router-dom';

const localhostAdmin = 'http://localhost:3000/admins';

class LoginForm extends React.Component {
  state = {
    name: '',
    password: '',
    admin: [],
    loggedIn: false,
    alert: false,
  };

  componentDidMount() {
    fetch(`${localhostAdmin}`)
      .then((resp) => resp.json())
      .then((admin) => this.setState({ admin }));
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
      this.setState({ loggedIn: true });
    } else {
      this.setState({ alert: true });
      this.resetSignup();
    }
  };

  resetSignup = () => {
    this.setState({
      name: '',
      password: '',
    });
  };

  render() {
    const { loggedIn } = this.state;
    const { alert } = this.state;
    if (loggedIn) {
      return <Redirect to="/admin" />;
    }
    if (alert) {
      return <Alert variant="danger">Please Try Again</Alert>;
    }

    return (
      <Container>
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
      </Container>
    );
  }
}

export default LoginForm;

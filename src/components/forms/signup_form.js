import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import emailjs from 'emailjs-com';

const localhostUsers = 'http://localhost:3000/users/';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    emailSent: false,
    alert: false,
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetSignup = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  addUser = () => {
    fetch(`${localhostUsers}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
        admin_id: 8,
      }),
    });
  };

  sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'fosterfitness',
        event.target,
        `${process.env.REACT_APP_JSE}`,
      )
      .then(
        // need to add form validations
        (result) => {
          if (result) {
            this.setState({ emailSent: true });
          }
          this.addUser();
          this.resetSignup();
        },
        (error) => {
          if (error) {
            this.setState({ alert: true });
          }
        },
      );
  };

  render() {
    const { emailSent } = this.state;
    const { alert } = this.state;
    let sentEmail;
    if (emailSent) {
      sentEmail = <Alert variant="success">Email successfully sent</Alert>;
    } else if (alert) {
      sentEmail = (
        <Alert variant="danger">
          Oops, something went wrong. Please try again.
        </Alert>
      );
    }

    return (
      <Container>
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
              type="email"
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
            {sentEmail}
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default Signup;

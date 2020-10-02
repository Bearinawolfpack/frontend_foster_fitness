import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AdminCoachesCard from '../cards/admin_coaches_card';

class CoachesEdit extends React.Component {
  state = {
    name: '',
    bio: '',
    picture: '',
    stateCoaches: [],
  };

  componentDidMount() {
    fetch('http://localhost:3000/coaches')
      .then((resp) => resp.json())
      .then((coaches) => this.setState({ stateCoaches: coaches }));
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = (id, str) => {
    if (str === 'Delete') {
      this.deleteHandler(id);
    } else if (str === 'Edit') {
      this.editHandler(id);
    }
  };

  deleteHandler = (id) => {
    let newStateCoaches = this.state.stateCoaches.filter(
      (coach) => coach.id !== id,
    );
    fetch('http://localhost:3000/coaches/' + String(id), {
      method: 'DELETE',
    }).then(this.setState({ stateCoaches: newStateCoaches }));
  };

  editHandler = (id) => {
    let coach = this.state.stateCoaches.find((coach) => coach.id === id);
    this.setState({
      name: coach.name,
      bio: coach.bio,
      picture: coach.picture,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    fetch('http://localhost:3000/coaches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        bio: this.state.bio,
        picture: this.state.picture,
        admin_id: 8,
      }),
    })
      .then(this.resetSignup)
      .then(() => this.componentDidMount());
  };

  resetSignup = () => {
    this.setState({
      name: '',
      bio: '',
      picture: '',
    });
  };

  render() {
    let gymCoaches = this.state.stateCoaches.map((coach) => (
      <AdminCoachesCard
        coach={coach}
        key={coach.id}
        clickHandler={this.clickHandler}
      />
    ));
    return (
      <Container>
        <h1>Current Coaches</h1>
        {gymCoaches}
        <Form onSubmit={this.submitHandler}>
          <Form.Group role="form">
            <Form.Label>Coaches Edit Form:</Form.Label>
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
              name="bio"
              placeholder="About"
              value={this.state.bio}
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
              Add coach
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default CoachesEdit;

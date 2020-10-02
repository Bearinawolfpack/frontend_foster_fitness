import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AdminCoachesCard from '../cards/admin_coaches_card';

const localhostCoaches = 'http://localhost:3000/coaches/';

class CoachesEdit extends React.Component {
  state = {
    name: '',
    bio: '',
    picture: '',
    stateCoaches: [],
  };

  componentDidMount() {
    fetch(`${localhostCoaches}`)
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
    const newStateCoaches = this.state.stateCoaches.filter(
      (coaches) => coaches.id !== id,
    );
    fetch(`${localhostCoaches}${String(id)}`, {
      method: 'DELETE',
    }).then(this.setState({ stateCoaches: newStateCoaches }));
  };

  editHandler = (id) => {
    const targetCoach = this.state.stateCoaches.find(
      (coach) => coach.id === id,
    );
    this.setState({
      name: targetCoach.name,
      bio: targetCoach.bio,
      picture: targetCoach.picture,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    fetch(`${localhostCoaches}`, {
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
    const gymCoaches = this.state.stateCoaches.map((coach) => (
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

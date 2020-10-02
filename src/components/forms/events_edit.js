import React from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AdminEventCard from '../cards/admin_event_card';

const localhostEvents = 'http://localhost:3000/events/';

class EventsEdit extends React.Component {
  state = {
    name: '',
    description: '',
    picture: '',
    stateEvents: [],
  };

  componentDidMount() {
    fetch(`${localhostEvents}`)
      .then((resp) => resp.json())
      .then((events) => this.setState({ stateEvents: events }));
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
    const newStateEvents = this.state.stateEvents.filter(
      (event) => event.id !== id,
    );
    this.remainingEvents(newStateEvents, id);
  };

  remainingEvents = (newStateEvents, id) => {
    fetch(`${localhostEvents}${String(id)}`, {
      method: 'DELETE',
    }).then(this.setState({ stateEvents: newStateEvents }));
  };

  editHandler = (id) => {
    const editEvent = this.state.stateEvents.find((event) => event.id === id);
    this.saveEvent(editEvent);
  };

  saveEvent = (editEvent) => {
    this.setState({
      name: editEvent.name,
      description: editEvent.description,
      picture: editEvent.picture,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    fetch(`${localhostEvents}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
      name: '',
      description: '',
      picture: '',
    });
  };

  render() {
    const gymEvents = this.state.stateEvents.map((event) => (
      <AdminEventCard
        event={event}
        key={event.id}
        clickHandler={this.clickHandler}
      />
    ));
    return (
      <Container>
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
      </Container>
    );
  }
}

export default EventsEdit;

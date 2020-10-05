import React from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';
import Workout from './workout';
import Pricing from './pricing';
import Jumbotron from '../components/jumbotron';
import Calendar from '../components/calendar';
import CoachCard from '../components/cards/coach_card';

const localhostCoaches = 'http://localhost:3000/coaches';

class Home extends React.Component {
  state = {
    classCoaches: [],
  };

  componentDidMount() {
    fetch(`${localhostCoaches}`)
      .then((resp) => resp.json())
      .then((coaches) => this.setState({ classCoaches: coaches }));
  }

  render() {
    const displayCoaches = this.state.classCoaches.slice(0, 3);
    const coaches = displayCoaches.map((coach) => (
      <CoachCard coach={coach} key={coach.id} />
    ));
    return (
      <>
        <Jumbotron />
        <div className="gym-color">
          <Container>
            <h3>Meet Our Coaches:</h3>
            <Row xs={1} md={2} lg={3}>
              {coaches}
            </Row>
          </Container>
        </div>
        <Workout />
        <div className="gym-color">
          <Calendar />
        </div>
        <Pricing />
      </>
    );
  }
}

export default Home;

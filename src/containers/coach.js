import React from 'react';
import '../App.css';
import { Row, Container } from 'react-bootstrap';

import CoachCard from '../components/cards/coach_card';

const localhostCoaches = 'http://localhost:3000/coaches';

class Coach extends React.Component {
  state = { stateCoaches: [] };

  componentDidMount() {
    fetch(`${localhostCoaches}`)
      .then((resp) => resp.json())
      .then((coaches) => this.setState({ stateCoaches: coaches }));
  }

  render() {
    const coaches = this.state.stateCoaches.map((coach) => (
      <CoachCard coach={coach} key={coach.id} />
    ));

    return (
      <div className="bg-format standing-bw">
        <Container>
          <Row xs={1} md={2} lg={3}>
            {coaches}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Coach;

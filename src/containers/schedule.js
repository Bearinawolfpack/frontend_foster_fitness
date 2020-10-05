import React from 'react';
import '../App.css';
import { Row, Container } from 'react-bootstrap';

import Calendar from '../components/calendar';
import Events from '../components/events';

const Schedule = () => (
  <div className="bg-format rings-bw2">
    <Container>
      <Row>
        <Calendar />
      </Row>
      <Row xs={1} md={2} lg={3}>
        <Events />
      </Row>
    </Container>
  </div>
);

export default Schedule;

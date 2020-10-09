import React from 'react';
import '../../App.css';
import { Card, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const EventCard = (props) => (
  <Container>
    <Row>
      <Card className="event-card">
        <Card.Title className="gym-text">{props.event.name}</Card.Title>
        <Card.Img
          variant="top"
          src={props.event.picture}
          alt="Wodapalooza event"
        />
        <Card.Text className="gym-text">{props.event.description}</Card.Text>
        <Button variant="link">
          <a href={props.event.url}>More Information</a>
        </Button>
      </Card>
    </Row>
  </Container>
);

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CoachCard = (props) => (
  <Col>
    <nav>
      <Link to={`/coach/${props.coach.id}`}>
        <Card bg="transparent" className="coach-card">
          <Card.Img
            src={props.coach.picture}
            alt="Foster Fitness Coach"
            width="300"
            height="300"
          />
          <Card.Body className="card-body">
            <Card.Title className="gym-text">{props.coach.name}</Card.Title>
            <Card.Text className="gym-text">{props.coach.bio}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </nav>
  </Col>
);

export default CoachCard;

CoachCard.propTypes = {
  coach: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

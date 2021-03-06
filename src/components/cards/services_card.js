import React from 'react';
import '../../App.css';
import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ServicesCard = (props) => (
  <Col>
    <Card border="warning" bg="transparent" className="service-card">
      <Card.Body className="service-body">
        <Card.Title as="h1" className="gym-text">
          {props.service.price}
        </Card.Title>
        <Card.Subtitle as="h3" className="mb-3 gym-text">
          {props.service.name}
        </Card.Subtitle>
        <Card.Text as="h5" className="gym-text">
          {props.service.description}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

export default ServicesCard;

ServicesCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

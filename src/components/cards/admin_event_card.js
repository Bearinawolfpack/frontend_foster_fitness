import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const AdminEventCard = (props) => {
  const clickListener = (id, str) => {
    props.clickHandler(id, str);
  };
  return (
    <Container>
      <br />
      <img
        src={props.event.picture}
        alt="Foster Fitness Event"
        width="350"
        height="250"
      />
      <br />
      <h6>{props.event.name}</h6>
      <p>{props.event.description}</p>
      <Button
        variant="danger"
        size="sm"
        onClick={() => clickListener(props.event.id, 'Delete')}
      >
        Delete Event
      </Button>
      <Button
        variant="warning"
        size="sm"
        onClick={() => clickListener(props.event.id, 'Edit')}
      >
        Edit Event
      </Button>
    </Container>
  );
};

export default AdminEventCard;

AdminEventCard.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  event: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

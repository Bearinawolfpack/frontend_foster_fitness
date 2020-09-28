import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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

import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AdminUserCard = (props) => (
  <Container>
    <span>
      <strong>Name: </strong>
    </span>
    <h5>{props.user.name}</h5>
    <span>
      <strong>Email: </strong>
    </span>
    <h6>{props.user.email}</h6>
    <span>
      <strong>Phone Number: </strong>
    </span>
    <h6>{props.user.phone}</h6>
    <span>
      <strong>Message: </strong>
    </span>
    <p>{props.user.message}</p>
    <span>
      <strong>Created at: </strong>
    </span>
    <p>{props.user.created_at}</p>
  </Container>
);

export default AdminUserCard;

AdminUserCard.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    phone: PropTypes.number.isRequired,
    created_at: PropTypes.instanceOf(Date),
  }).isRequired,
};

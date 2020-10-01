import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const AdminServicesCard = (props) => {
  const clickListener = (id, str) => {
    props.clickHandler(id, str);
  };
  return (
    <>
      <h5>{props.service.price}</h5>
      <h6>{props.service.name}</h6>
      <p>{props.service.description}</p>
      <Button
        variant="danger"
        size="sm"
        onClick={() => clickListener(props.service.id, 'Delete')}
      >
        Delete Service
      </Button>
      <Button
        variant="warning"
        size="sm"
        onClick={() => clickListener(props.service.id, 'Edit')}
      >
        Edit Service
      </Button>
    </>
  );
};

export default AdminServicesCard;

AdminServicesCard.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  service: PropTypes.shape({
    price: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

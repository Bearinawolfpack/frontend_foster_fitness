import React from 'react';
import '../../App.css';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

const WorkoutJumbotron = (props) => (
  <Jumbo fluid className="jumbo-format workout-jumbo bw-mess">
    <div className="overlay" />
    <Container id="center-jumbo-content">
      <h3>Today is {props.wod.date} and the Workout for today is:</h3>
      <h1 className="gym-text">{props.wod.name}</h1>
      <h3>{props.wod.wod}</h3>
      Summary: <h5>{props.wod.description}</h5>
    </Container>
  </Jumbo>
);

export default WorkoutJumbotron;

WorkoutJumbotron.propTypes = {
  wod: PropTypes.shape({
    name: PropTypes.string.isRequired,
    wod: PropTypes.string.isRequired,
    date: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

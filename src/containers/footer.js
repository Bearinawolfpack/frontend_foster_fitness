import React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';

import Map from '../components/map';
import GymContact from '../components/gym_contact';
import Signup from '../components/forms/signup_form';

const Footer = () => (
  <div className="gym-color">
    <Map />
    <Row>
      <Col>
        <GymContact />
      </Col>
      <Col>
        <Signup />
      </Col>
    </Row>
  </div>
);

export default Footer;

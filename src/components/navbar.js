import React from 'react';
import '../App.css';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .nav-brand,
  .navbar-nav .nav-link {
    &:hover {
      color: white;
    }
  }
`;

class NavigationBar extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar expand="lg" className="gym-color">
          <Navbar.Brand href="/">Foster Fitness</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Sign Up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/schedule">Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/pricing">Prices</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/workout">Workout</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/coach">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

export default NavigationBar;

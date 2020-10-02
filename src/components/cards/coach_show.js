import React from 'react';
import '../../App.css';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class ShowCoach extends React.Component {
  state = { stateCoach: {} };

  componentDidMount() {
    fetch(`http://localhost:3000/coaches/${this.props.match.params.id}`)
      .then((resp) => resp.json())
      .then((coach) => this.setState({ stateCoach: coach }));
  }

  render() {
    return (
      <div className="bg-format cf-ambience">
        <Row>
          <Col
            style={{
              paddingBottom: '50px',
              marginTop: '50px',
              marginLeft: '50px',
            }}
          >
            <img
              src={this.state.stateCoach.picture}
              alt="Foster Fitness Coach"
              width="500"
              height="500"
            />
          </Col>
          <Col
            style={{
              paddingTop: '50px',
              backgroundColor: 'rgba(0,0,0,.5)',
            }}
          >
            <h3 className="gym-text">{this.state.stateCoach.name}</h3>
            <p className="gym-text">{this.state.stateCoach.bio}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShowCoach;

ShowCoach.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

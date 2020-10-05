import React from 'react';

import WorkoutJumbotron from '../components/cards/workout_jumbotron';

const localhostWorkouts = 'http://localhost:3000/workouts';

class Workout extends React.Component {
  state = { stateWorkout: [] };

  componentDidMount() {
    fetch(`${localhostWorkouts}`)
      .then((resp) => resp.json())
      .then((workout) => this.setState({ stateWorkout: workout }));
  }

  render() {
    const currentWorkout = this.state.stateWorkout.map((wod) => (
      <WorkoutJumbotron wod={wod} key={wod.id} />
    ));
    return <div>{currentWorkout}</div>;
  }
}

export default Workout;

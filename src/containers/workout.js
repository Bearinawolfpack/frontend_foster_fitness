import React from 'react'
import WorkoutJumbotron from '../components/cards/workout_card'

class Workout extends React.Component{
    state = { stateWorkout: [] }

    componentDidMount(){
        fetch('http://localhost:3000/workouts')
        .then(resp => resp.json())
        .then(workout => this.setState({ stateWorkout: workout })) 
    }

    render(){
        let currentWorkout = this.state.stateWorkout.map(wod => <WorkoutJumbotron wod={wod} key={wod.id} />)
        return(
            <div>
                {currentWorkout}
            </div>
        )
    }
}


export default Workout
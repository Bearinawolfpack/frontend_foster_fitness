import React from 'react'
import WorkoutCard from '../components/cards/workout_card'

class Workout extends React.Component{
    state = { stateWorkout: [] }

    componentDidMount(){
        fetch('http://localhost:3000/workouts')
        .then(resp => resp.json())
        .then(workout => this.setState({ stateWorkout: workout })) 
    }

    render(){
        // console.log(this.state.stateWorkout)
        let currentWorkout = this.state.stateWorkout.map(wod => <WorkoutCard wod={wod} key={wod.id} />)
        return(
            <div>
                {currentWorkout}
            </div>
        )
    }
}


export default Workout
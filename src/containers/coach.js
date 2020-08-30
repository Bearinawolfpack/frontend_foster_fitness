import React from 'react'
import CoachCard from '../components/cards/coach_card'

class Coach extends React.Component{
    state = { stateCoaches:[] }

    componentDidMount(){
        fetch('http://localhost:3000/coaches')
        .then(resp => resp.json())
        .then(coaches => this.setState({stateCoaches: coaches}))
    }

    render() {
        let coaches = this.state.stateCoaches.map(coach => <CoachCard coach={coach} key={coach.id}/>)
        
        return(
            <React.Fragment>
                {coaches}
            </React.Fragment>
        )
    }
}


export default Coach
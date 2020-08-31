import React from 'react'
import Workout from "./workout"
import Pricing from "./pricing"
import Jumbotron from '../components/jumbotron'
import Calendar from '../components/calendar'
import CoachCard from '../components/cards/coach_card'
import Layout from "../components/layout";

class Home extends React.Component{
    state = { classCoaches: [] }

    componentDidMount(){
        fetch('http://localhost:3000/coaches')
        .then(resp => resp.json())
        .then(coaches => this.setState({ classCoaches: coaches }))
        
    }

    render(){
        let headCoach = this.state.classCoaches.map(coach => <CoachCard coach={coach} key={coach.id} />)
        return(
            <React.Fragment>
            <Jumbotron/>
            <Calendar/>
            <div>
                <Layout>
                    <h3>Meet Our Head Coach:</h3>
                </Layout>
                {headCoach[0]}
            </div>
            <Workout />
            <Pricing />
            </React.Fragment>
        )
    }

}

export default Home
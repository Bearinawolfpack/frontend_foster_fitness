import React from 'react'
import EventCard from './cards/events_card'

class Events extends React.Component {
    componentDidMount(){
        fetch('http://localhost:3000/events')
        .then(resp => resp.json())
        .then(events => console.log(events))
    }
    render() {
        return(
            <EventCard/>
        )
    }
}

export default Events
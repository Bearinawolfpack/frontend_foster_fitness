import React from 'react'
import EventCard from './cards/events_card'

class Events extends React.Component {
    state = { stateEvents:[] }

    componentDidMount(){
        fetch('http://localhost:3000/events')
        .then(resp => resp.json())
        .then(events => this.setState({stateEvents: events}))
    }

    render() {
        // console.log(this.state.stateEvents)
        let events = this.state.stateEvents.map(event => <EventCard event={event} key={event.id}/>)
        console.log(events)
        return(
            <div>
                {events}
            </div>

        )
    }
}

export default Events
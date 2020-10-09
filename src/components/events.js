import React from 'react';

import EventCard from './cards/events_card';

const localhostEvents = 'http://localhost:3000/events'

class Events extends React.Component {
  state = { stateEvents: [] };

  componentDidMount() {
    fetch(`${localhostEvents}`)
      .then((resp) => resp.json())
      .then((events) => this.setState({ stateEvents: events }));
  }

  render() {
    const events = this.state.stateEvents.map((event) => (
      <EventCard event={event} key={event.id} />
    ));
    return <>{events}</>;
  }
}

export default Events;

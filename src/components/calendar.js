import React from 'react';
import Iframe from 'react-iframe';
import { Container } from 'react-bootstrap';

function Calendar() {
  return (
    <Container style={{ paddingTop: '30px', paddingBottom: '30px' }}>
      <Iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23F6BF26&amp;ctz=America%2FNew_York&amp;src=azc5ZHNyN3ZyOTB2OWlwNnJicjBsMWI3djBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        style={{ border: 'solid 1px #777' }}
      />
    </Container>
  );
}

export default Calendar;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { events } from '../db/events';
import CardComponent from '../components/EventCard';
import JumbotronComponent from '../components/Jumbotron';

const Events = () => {
  return (
    <div id="events">
      <JumbotronComponent pageTitle='Events Page' lead='Stay up on the latest events.' />
      <Container>
        <h1>Stay up with us on the latest</h1>
        <Row>
        {
          events.map((event, index) => {
            return (
              <Col key={index} md={3} xs={12} >
                <CardComponent event={event} />
                <hr />
              </Col>
            )
          })
        }
        </Row>
      </Container>
    </div>
  );
}

export default Events;


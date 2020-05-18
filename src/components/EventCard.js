import React from 'react';
import { Card, CardBody, CardImg, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { baseEventImage } from '../db/events';

const eventStyle = {
  type: {
    backgroundColor: 'blue',
    marginTop: '-16px',
    borderRadius: '5%',
    color: '#ffffff',
    fontWeight: 700,
    position: 'relative',
    width: '75%',
    left: '20%'
  },
  body: {
    border: '8px solid #dac0f3',
    borderRadius: '5px',
    backgroundColor: 'black',
    color: 'white',
    padding: 0,
    paddingBottom: '10px',
    textAlign: 'center'
  }
}

const EventCardComponent = ({ event }) => {
  return (
    <Card>
      <CardBody style={eventStyle.body}>
        <CardImg top width="100%" src={event.flyer || baseEventImage} alt={event.name} />
        <Row style={eventStyle.type}>
          <Col className="py-1">{event.type}</Col>
        </Row>
        <Row>
          <Col className="mt-3"><h6><strong>{event.name}</strong></h6></Col>
        </Row>
        <Row>
          <Col className="mb-2 date">
            <FontAwesomeIcon className='mx-1' size='sm' icon={faCalendarDay} /> - {event.date}
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 date">
            <FontAwesomeIcon className='mx-1' size='sm' icon={faBuilding} /> - {event.location}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default EventCardComponent;
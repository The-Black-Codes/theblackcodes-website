import React from 'react';
import { Card, CardBody, CardImg, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { baseEventImage } from '../db/events';

const eventStyle = {
  type: {
    backgroundColor: 'black',
    marginTop: '-16px',
    borderRadius: '5%',
    color: '#ffffff',
    fontWeight: 700,
    position: 'relative',
    width: '75%',
    left: '20%'
  },
  body: {
    padding: 0
  },
  img: {
    border: '5px solid rgba(0,0,0,0.5)',
    borderRadius: '5%'
  }
}

const HomeEventCardComponent = ({ event }) => {
  return (
    <Card style={{ background: 'transparent'}}>
      <CardBody style={eventStyle.body}>
        <CardImg top width="100%" height="327" style={eventStyle.img} src={event.flyer || baseEventImage} alt={event.name} />
        <Row style={eventStyle.type}>
          <Col className="py-1">{event.name}</Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default HomeEventCardComponent;
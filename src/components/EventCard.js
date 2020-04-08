import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CardComponent = ({ event }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><h3>{event.name}</h3></CardTitle>
          <CardSubtitle>{event.location}</CardSubtitle>
          <CardSubtitle>{event.address}</CardSubtitle>
          <CardSubtitle>{event.date}</CardSubtitle>
          <CardSubtitle>{event.about}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
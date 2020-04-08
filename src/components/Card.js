import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CardComponent = ({ organizer }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={organizer.photo} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h3>{organizer.name}</h3>
          </CardTitle>
          <CardSubtitle>{organizer.title}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CardComponent = ({ organizer, imgType }) => {
  const radius = imgType === 'roundedCircle' ? '50%' : '5%';

  return (
    <div>
      <Card>
        <CardImg top width="100%" src={organizer.photo} alt={organizer.name} style={{ borderRadius: radius }} />
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
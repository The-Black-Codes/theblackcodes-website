import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../App.scss';

const JumbotronComponent = (props) => {
  const isButton = props.buttonText || '';
  return (
    <Jumbotron>
      <h1 className="display-3">{props.pageTitle}</h1>
      <hr className="my-3" />
      { isButton && (
        <p className="lead mt-5">
          <Button outline size="lg" onClick={() => props.history.push('/about')}>{props.buttonText}</Button>
        </p>
      )
      }
    </Jumbotron>
  );
};

export default JumbotronComponent;
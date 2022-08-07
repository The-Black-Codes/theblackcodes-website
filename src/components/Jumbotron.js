import React from 'react';
import { Button } from 'reactstrap';
import '../App.scss';

const HeaderComponent = (props) => {
  const isButton = props.buttonText || '';
  return (
    <div className="header">
      <h1 className="display-3">{props.pageTitle}</h1>
      <hr className="my-3" />
      { isButton && (
        <p className="lead mt-5">
          <Button outline size="lg" onClick={() => props.history.push('/about')}>{props.buttonText}</Button>
        </p>
      )
      }
    </div>
  );
};

export default HeaderComponent;
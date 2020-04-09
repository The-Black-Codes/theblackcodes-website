import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faSnapchat, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const jumboStyles = {
  backgroundColor: 'white',
  backgroundImage: "linear-gradient(to bottom, rgba(143,58,132,1), rgba(255,0,0,0))"
}

const JumbotronComponent = (props) => {
  const isButton = props.buttonText || '';
  return (
    <div>
      <Jumbotron style={jumboStyles}>
        <h1 className="display-3">{props.pageTitle}</h1>
        <p className="lead">{props.lead}</p>
        <hr className="my-3" />
        { isButton && (
          <p className="lead">
            <Button outline color="secondary" onClick={() => props.history.push('/about')}>{props.buttonText}</Button>
          </p>
        )
        }
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
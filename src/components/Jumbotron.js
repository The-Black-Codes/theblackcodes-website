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
        <FontAwesomeIcon className='mx-3' color='lightblue' size='6x' icon={faTwitter} />
        <FontAwesomeIcon className='mx-3' color='blue' size='6x' icon={faFacebook} />
        <FontAwesomeIcon className='mx-3' color='brown' size='6x' icon={faInstagram} />
        <FontAwesomeIcon className='mx-3' color='yellow' size='6x' icon={faSnapchat} />
        <FontAwesomeIcon className='mx-3' color='red' size='6x' icon={faYoutube} />
        <FontAwesomeIcon className='mx-3' color='black' size='6x' icon={faGithub} />
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
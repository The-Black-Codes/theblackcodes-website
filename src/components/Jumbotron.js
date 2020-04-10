import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faSnapchat, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../App.scss';

// const jumboStyles = {
//   backgroundColor: 'linear-gradient(180deg, rgba(59, 35, 93, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%);',
//   backgroundImage: "linear-gradient(180deg, rgba(59, 35, 93, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%);"
// }

const JumbotronComponent = (props) => {
  const isButton = props.buttonText || '';
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.pageTitle}</h1>
        <p className="lead">{props.lead}</p>
        <hr className="my-3" />
        { isButton && (
          <p className="lead">
            <Button outline onClick={() => props.history.push('/about')}>{props.buttonText}</Button>
          </p>
        )
        }
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
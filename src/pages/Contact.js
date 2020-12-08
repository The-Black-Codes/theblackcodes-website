import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faTwitter, faFacebook, faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons'

import JumbotronComponent from '../components/Jumbotron';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  
  return (
    <div id="contact">
    <JumbotronComponent pageTitle='Contact Us' lead='Stay in touch with The Black.Codes.' />
    <Container className="">
      <Row>
        <Col xs={12} md={6} className="contact-info">
          <div className="row">
            <div className="col">
              <h3>The Black.Codes</h3>
              <FontAwesomeIcon size='1x' icon={faEnvelope} /> -info@theblackcodes.org
            </div>
          </div>
          <div className="row">
            <div className="col">
              <FontAwesomeIcon size='1x' icon={faGlobeAmericas} /> -https://www.theblackcodes.org
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h3>Social Media</h3>
              <FontAwesomeIcon size='2x' className="mx-2" icon={faFacebook} />
              <FontAwesomeIcon size='2x' className="mx-2" icon={faInstagram} />
              <FontAwesomeIcon size='2x' className="mx-2" icon={faTwitter} />
              <FontAwesomeIcon size='2x' className="mx-2" icon={faLinkedin} />
              <FontAwesomeIcon size='2x' className="mx-2" icon={faGithub} />
              <FontAwesomeIcon size='2x' className="mx-2" icon={faYoutube} />
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-5 pl-5">
          <h3 className="mb-4">Stay in touch with The Black Codes</h3>
          <ContactForm  />
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default Contact;
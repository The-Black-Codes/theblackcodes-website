import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faTwitter, faFacebook, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

import JumbotronComponent from '../components/Jumbotron';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  
  return (
  <div id="contact">
    <JumbotronComponent id="contact-title" pageTitle='Contact Us' lead='Stay in touch with The Black.Codes.' />

      <ContactForm  />
</div>
  );
}

export default Contact;
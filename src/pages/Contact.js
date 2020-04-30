import React from 'react';
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
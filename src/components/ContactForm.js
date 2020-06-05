import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import validator from 'validator';
import ReCAPTCHA from "react-google-recaptcha";

toast.configure()

const ContactForm = _ => {
  const [form, setForm] = useState({});
  const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:8001' : 'https://api.theblackcodes.org';
  
  const notify = () => toast("Form successfully sent! We will contact you soon.", { 
    autoClose: 5000,
    position: 'top-right',
    type: toast.TYPE.SUCCESS
  });

  const validate = _ => {
    const { name, email, message, captcha } = form;

    if (name && validator.matches(name, /^[a-zA-Z ]*$/) && email && validator.isEmail(email) && message && captcha) {
      return false;
    }
    return true;
  }

  const submitForm = async () => {
    const sendToSlack = await axios.post(`${apiUrl}/contact`, form, {
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!sendToSlack.err) {
      setForm({});
      notify();
    }
    console.log('end', form);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="name"><h5>Name</h5></Label>
        <Input type="text" id="name" onChange={(event) => setForm({ ...form, [event.target.id]: event.target.value })} value={form.name || ''} placeholder="Please enter your Name..." />
      </FormGroup>
      
      <FormGroup>
        <Label for="email"><h5>Email</h5></Label>
        <Input type="email" id="email" onChange={(event) => setForm({ ...form, [event.target.id]: event.target.value })} value={form.email || ''} placeholder="Please enter your email..." />
      </FormGroup>
      <FormGroup>
        <Label for="message"><h5>Message</h5></Label>
        <Input type="textarea" id="message" onChange={(event) => setForm({ ...form, [event.target.id]: event.target.value })} value={form.message || ''} placeholder="Please leave us a message..." />
      </FormGroup>

      <ReCAPTCHA className="mb-3" sitekey="6Lf9zvAUAAAAAB0WcZEbWKfAS05Zg0QCeOSMLaJS" onChange={event => setForm({ ...form, captcha: event })} />
    
      <Button block color="primary" disabled={validate()} onClick={submitForm}>Submit</Button>
    </Form>
  );
}

export default ContactForm;
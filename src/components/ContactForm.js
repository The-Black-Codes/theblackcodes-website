import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const ContactForm = _ => {
  const [form, setForm] = useState({});

  const submitForm = async () => {
    await axios.post('http://localhost:8001/contact', form, {
      headers: {
        'content-type': 'application/json'
      }
    });
  };

  return (
    <Container className="contact-page my-5">
      <Row>
        <Col xs={12} md={6}>
        
        </Col>
        <Col>
          <Form>
            <FormGroup>
              <Label for="email"><h4>Email</h4></Label>
              <Input type="email" id="email" onChange={(event) => setForm({ ...form, [event.target.id]: event.target.value })} placeholder="Please enter your email..." />
            </FormGroup>
            <FormGroup>
              <Label for="name"><h4>Name</h4></Label>
              <Input type="text" id="name" onChange={(event) => setForm({ ...form, [event.target.id]: event.target.value })} placeholder="Please enter your Name..." />
            </FormGroup>
          
            <FormGroup>
              <Label for="message"><h4>Message</h4></Label>
              <Input type="textarea" id="message" onChange={(event) => setForm({ ...form, [event.target.id]: event.target.value })} placeholder="Please leave us a message..." />
            </FormGroup>
          
            <Button block color="success" onClick={submitForm}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;
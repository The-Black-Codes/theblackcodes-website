import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Plese enter your email..." />
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="Please enter your Name..." />
      </FormGroup>
    
      <FormGroup>
        <Label for="exampleText">Message</Label>
        <Input type="textarea" name="text" id="exampleText" placeholder="Please leave us a message..." />
      </FormGroup>
    
      <Button>Submit</Button>
    </Form>
  );
}

export default ContactForm;
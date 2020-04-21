import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactForm = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail"><h2>Email</h2></Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Plese enter your email..." />
      </FormGroup>
      <FormGroup>
        <Label for="name"><h2>Name</h2></Label>
        <Input type="text" name="name" id="name" placeholder="Please enter your Name..." />
      </FormGroup>
    
      <FormGroup>
        <Label for="exampleText"><h2>Message</h2></Label>
        <Input type="textarea" name="message" id="exampleText" placeholder="Please leave us a message..." />
      </FormGroup>
    
      <Button><p>Submit</p></Button>
    </Form>
  );
}

export default ContactForm;
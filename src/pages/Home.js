import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import CardComponent from '../components/Card';
import HomeEventCardComponent from '../components/HomeEventCard';
import JumbotronComponent from '../components/Jumbotron';
import { organizers } from '../db/organizers';
import { events } from '../db/events';
import content from "../siteContent.json";

const Home = (props) => {
  return (
    <div id="home">
      <JumbotronComponent id="homeJumbotron" pageTitle="Culture, Community, Code" lead="Your Platform for Black Tech Culture" buttonText="Learn More" {...props} />
      <section id="home-about">
        <div className="container">
          <h2>{content.homepageAbout}</h2>
        </div>
      </section>
      <section id="home-events">
        <Container>
          <Row>
            <Col>
              <h2>Our Latest Events</h2>
            </Col>
          </Row>
          <Row>
          {
            events.map((event, index) => {
              return (
                <Col key={index} md={3} xs={12} >
                  <HomeEventCardComponent event={event} />
                </Col>
              )
            })
          }
          </Row>
          <Row>
            <Col>
              <Button size="lg" onClick={() => props.history.push('/events')}>See more</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="home-contact">
        <Container>
          <Row>
            <Col>
              <p>Are you looking to connect with us? <br/>Join our community of Black Devs! <br/>Do you need help with a project or have a project idea?</p>
              <Button size="lg" onClick={() => props.history.push('/contact')}>Contact us</Button>
            </Col> 
          </Row>
        </Container>
      </section>
      <section id="home-organizers">
        <Container>
          <Row className="mb-4">
            <Col><h2>Our Organizers</h2></Col>
          </Row>
          <Row>
            {
              organizers.map((organizer, index) => {
                return (
                  <Col key={index} md={3} xs={12} >
                    <CardComponent key={organizers.id} organizer={organizer} imgType='roundedCircle' />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
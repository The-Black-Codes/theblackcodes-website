import React from 'react';
import JumbotronComponent from '../components/Jumbotron';
import {Container,Row,Col} from 'reactstrap';

const About = () => {
    return (
      <>
        <JumbotronComponent
          pageTitle="About Us"
          lead="Learn all about The Black.Codes."
        />

        <Container>
          <Row className="about-section">
            <Col md={6} xs={12}>
              <div class="about-img"></div>
            </Col>
            <Col md={6} xs={12}>
              <h2>Get to Know Us</h2>
              <p className="about-info">
                The Black.Codes is a resource hub for the black tech community.
                We strive to empower and position our community to be leaders in
                the tech industry.
              </p>
            </Col>
          </Row>
          <Row className="mission-state py-5">
            <Col md={6} xs={12}>
              <h2>Mission Statment</h2>
              <p className="statement">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={4} xs={12} className="who-are-we">
              <h2>Who we are?</h2>
              <p>We are a platform for black tech culture!</p>
            </Col>
            <Col md={4} xs={12} className="what-we-do">
              <h2>What do we do?</h2>
              <p>
                We present/create jobs and resources for our community through
                tech
              </p>
            </Col>
            <Col md={4} xs={12} className="why-we-do">
              <h2>why do we do it?</h2>
              <p>
                We do it to present a new perspective of ideas in the tech space
                by those who have been continuously ignored/suppressed.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={12} className="how-we-do">
              <h2>How do we do it?</h2>
              <p>
                Through events, collaborations, hackathons, community support,
                teaching opportunities, apprenticeships, social media, Increase
                ownership of black tech businesses, direct software support We
                do it by spotlighting black engineers, and developers that are
                creating in this tech space. We invest in
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default About;

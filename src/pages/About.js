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

export default About;.Container {
  position: relative;
  min-height: 300px;
  max-height: 800px;
  overflow: hidden;
  margin-bottom: 500px;
}

/* Style the video: 100% width and height to cover the entire window */
.Video {
  width: 100%;
  height: 100%;
}

/* Add some content at the bottom of the video/page */
.Content {
  position: absolute;
  top: 0;
  color:#f1f1f1;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.SubContent {
    text-align: center;
    padding: 10px;
  }
.SubContent p {
    color: #eeeeeead;
    font-size: 1.3rem;
}
.SubContent button {
    font-weight: bold;
    margin-top: 30px;
    color: #f1f1f1;
    border: #f1f1f1 1px solid;
    padding: 10px 5px;
    background-color: hsla(0, 0%, 0%, 0);
    font-size: 1.25rem;
    border-radius: 5px;
}
.SubContent button:hover {
    background-color: #f1f1f1;
    color: #000000c0;
}

.SubContent img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  border: #f1f1f1 1px solid;
}
import React from 'react';
import BackgroundVideo from '../components/BackgroundVideo';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
    return (
      <div id="about">
        <BackgroundVideo />
        
        <section id="the-then">
          <Container>
            <Row>
              <Col>
                <h2>The Then</h2>
                <h3><p>The Black Codes, sometimes called Black Laws, were laws governing the conduct of African Americans. The best known of them were passed in 1865 and 1866 by Southern states, after the American Civil War, in order to restrict African Americans' freedom, and to compel them to work for low wages.</p><p>The Black Codes were part of a larger pattern of whites trying to maintain political dominance and suppress the freedmen, newly emancipated African-American slaves. Black codes were essentially replacements for slave codes in those states. Before the war, Northern states that had prohibited slavery also enacted Black Codes: Connecticut, Ohio, Illinois, Indiana, Michigan, and New York enacted laws to discourage free blacks from residing in those states.</p><p>African Americans were denied equal political rights, including the right to vote, the right to attend public schools, and the right to equal treatment under the law. Some of the Northern states repealed such laws around the same time that the Civil War ended and slavery was abolished by constitutional amendment.</p></h3>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="the-now">
          <Container>
            <Row>
              <Col md={5} xs={12}>
                <div class="about-img"></div>
              </Col>
              <Col md={7} xs={12}>
                <h2>The Now</h2>
                <p className="about-info">
                  The Black.Codes is a tech resource hub for the black community.
                  We strive to empower and position our community to be leaders in
                  the tech industry.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        
        <section className="mission-state">
          <Container>
            <Row className="py-5">
              <Col>
                <h2>Mission Statment</h2>
                <p className="statement">
                We are a group of black software engineers that are focused on creating opportunities for our community and ourselves through tech.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="reasons">
          <Row className="">
            <Col md={6} xs={12} className="who-are-we">
              <h2>who we are</h2>
              <p>A black tech community supporting and protecting our culture!</p>
            </Col>
            <Col md={6} xs={12} className="what-we-do">
              <h2>what do we do</h2>
              <p>
                We present/create jobs and resources for our community through
                tech
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={12} className="why-we-do">
              <h2>why do we do it</h2>
              <p>
                We do it to present a new perspective of ideas in the tech space
                by those who have been continuously ignored/suppressed.
              </p>
            </Col>
            <Col md={6} xs={12} className="how-we-do">
              <h2>how do we do it</h2>
              <p>
                Through events, collaborations, hackathons, community support,
                teaching opportunities, apprenticeships, social media, Increase
                ownership of black tech businesses, direct software support We
                do it by spotlighting black engineers, and developers that are
                creating in this tech space. We invest in
              </p>
            </Col>
          </Row>
        </section>
      </div>
    );
}

export default About;

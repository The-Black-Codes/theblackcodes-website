import React from 'react';
import { Container, Row, Col, Image } from 'reactstrap';

import CardComponent from '../components/Card';
import JumbotronComponent from '../components/Jumbotron';
import { organizers } from '../db/organizers';
import content from "../siteContent.json";

const Home = (props) => {
  console.log(content);
  const headerCards = [{
    name: 'The Virtual Hack-a-thon',
    title: 'Monthly Hack-a-thon',
    photo: 'https://res.cloudinary.com/fletchlab/image/upload/v1588018695/theblackcodes/website_images/TBC_Virtual_Hack-a-thon_hraonb.jpg'
  }, {
    name: 'Header 2',
    title: 'This is the header',
    photo: 'https://via.placeholder.com/150'
  }, {
    name: 'Header 3',
    title: 'This is the header',
    photo: 'https://via.placeholder.com/150'
  }];

  return (
    <div id="home">
      <JumbotronComponent id="homeJumbotron" pageTitle="Culture, Community, Code" lead="Random Text" buttonText="Learn More" {...props} />
        <section id="home-about">
          <div className="container">
            <h2>{content.homepageAbout}</h2>
          </div>
        </section>
        <section id="home-updates">
          <Container>
            <Row>
              <Col>
                <h2>Events</h2>
              </Col>
            </Row>
            <Row>
            {
              headerCards.map((header, index) => {
                return (
                  <Col key={index} md={4} xs={12} >
                    <CardComponent organizer={header} imgType='rounded' />
                  </Col>
                )
              })
            }
            </Row>
          </Container>
        </section>
        <section id="home-contact">
          <Row>
            <Col>
              <h2 className="pt-5">Reach out to Us!</h2>
              <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="btn" onClick={() => props.history.push('/contact')}>Contact us</button>
            </Col> 
          </Row>
        </section>
        <section className="container-fluid" id="organizers">
          <h2>ORGANIZERS</h2>
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
        </section>
    </div>
  );
}

export default Home;
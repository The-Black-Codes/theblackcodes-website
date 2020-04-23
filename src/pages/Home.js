import React from 'react';
import { Row, Col, Image } from 'reactstrap';

import CardComponent from '../components/Card';
import JumbotronComponent from '../components/Jumbotron';
import { organizers } from '../db/organizers';

const Home = (props) => {
  const headerCards = [{
    name: 'Header 1',
    title: 'This is the header',
    photo: 'https://via.placeholder.com/150'
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
    <>
      <JumbotronComponent pageTitle="Culture, Community, Code" lead="Random Text" buttonText="Learn More" {...props} />
      <div>
        <section id="home-about">
          <div className="container">
            <h2>About Section</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam. Hac habitasse platea dictumst vestibulum rhoncus. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Porta lorem mollis aliquam ut porttitor leo a.</p>
          </div>
        </section>
        <section id="home-updates">
          <div className="container">
              <h2>Events</h2>
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
          </div>
          
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
    </>
  );
}

export default Home;
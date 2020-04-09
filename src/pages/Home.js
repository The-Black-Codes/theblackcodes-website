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
      <div className="container">
        <section>
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
        </section>

        <section id="contact-block" className="my-5">
          <h2>Contact Block</h2>
          <p>Contact blurp</p>
          <button className="btn btn-success" onClick={() => props.history.push('/contact')}>Contact us</button>
        </section>

        <section id="organizers">
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
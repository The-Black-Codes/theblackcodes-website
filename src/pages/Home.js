import React from 'react';
import CardComponent from '../components/Card';
import JumbotronComponent from '../components/Jumbotron';
import { organizers } from '../db/organizers';

const Home = (props) => {
  return (
    <>
      <JumbotronComponent pageTitle="Code, Community, Code" lead="Random Text" buttonText="Learn More" {...props} />
      <div className="container">

        <section id="organizers">
          <h2>ORGANIZERS</h2>
          <div className="row">
            {
              organizers.map((organizer, index) => {
                return (
                  <div className="col-md-3 col-sm-12  my-3">
                    <CardComponent key={organizers.id} organizer={organizer} />
                  </div>
                )
              })
            }
          </div>
        </section>
  
      </div>
    </>
  );
}

export default Home;
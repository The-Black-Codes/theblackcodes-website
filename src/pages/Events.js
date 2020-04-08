import React from 'react';
import { events } from '../db/events';
import CardComponent from '../components/EventCard';
import JumbotronComponent from '../components/Jumbotron';

const Events = () => {
  return (
    <div className="container-fluid">
      <JumbotronComponent pageTitle='Events Page' lead='Stay up on the latest events.' />
      <div className="row">
      {
        events.map((event) => {
          return (
            <div key={event.id} className="col col-3 my-3">
              <CardComponent event={event} />
            </div>
          )
        })
      }
      </div>
    </div>
  );
}

export default Events;


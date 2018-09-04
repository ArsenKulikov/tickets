import React from 'react';
import data from '../../db/tickets';
import Ticket from '../Ticket/Ticket';

const TicketsBar = props => {
  return (
    <div>
      {data.tickets.map((ticket, index) => (
        <Ticket
          key={index}
          arrival_date={ticket.arrival_date}
          arrival_time={ticket.arrival_time}
          carrier={ticket.carrier}
          departure_date={ticket.departure_date}
          departure_time={ticket.departure_time}
          destination={ticket.destination}
          destination_name={ticket.destination_name}
          origin={ticket.origin}
          origin_name={ticket.origin_name}
          price={ticket.price}
          stops={ticket.stops}
        />
      ))}
    </div>
  );
};

export default TicketsBar;

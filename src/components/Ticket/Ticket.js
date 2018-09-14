import React from 'react';

const Ticket = props => {
  return (
    <div style={{border: '1px solid black'}}>
      <span>{props.arrival_date} </span>
      <span>{props.arrival_time} </span>
      <span>{props.carrier} </span>
      <span>{props.departure_date} </span>
      <span>{props.departure_time} </span>
      <span>{props.destination} </span>
      <span>{props.destination_name} </span>
      <span>{props.origin} </span>
      <span>{props.origin_name} </span>
      <span>Цена: {props.price} </span>
      <span>Остановок: {props.stops} </span>
    </div>
  );
};

export default Ticket;

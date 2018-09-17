import React, { Component } from 'react';
import { connect } from 'react-redux'

import data from '../../db/tickets';
import Ticket from '../Ticket/Ticket';

class TicketsBar extends Component {

  render(){
    const filters = this.props.filters;

    const multiplier = this.props.currency.multiplier
    let ticketsArray

    if (filters.length){
      ticketsArray = data.tickets.filter(ticket => {
         return filters.some(filter => +filter === ticket.stops) 
      })
    } else if (!filters.length) {
      ticketsArray = data.tickets 
    }

  return (
    <div>
      {ticketsArray
        .map((ticket, index) => (
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
          price={Math.ceil(ticket.price * multiplier)}
          stops={ticket.stops}
        />
      ))}
    </div>
  );
};
}

const mapStateToProps = (state) => ({
  filters: state.visibilityFilterReducer.filters,
  currency: state.currencyReducer
})



export default connect(mapStateToProps, null)(TicketsBar);

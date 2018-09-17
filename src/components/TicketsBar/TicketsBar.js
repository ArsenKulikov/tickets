import React, { Component } from 'react';
import { connect } from 'react-redux'

import data from '../../db/tickets';
import Ticket from '../Ticket/Ticket';

class TicketsBar extends Component {
  state = {
    tickets: []
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should')
    return true
  }

  componentDidMount(){
    this.setState({tickets: data.tickets})
  }

  componentWillReceiveProps(nextProps){
    // this.setState({tickets: data.tickets})
    console.log(nextProps)
  }

  render(){
    const filters = this.props.filters;
    console.log(filters)
    const multiplier = this.props.currency.multiplier
    let ticketsArray

    if (filters.length){
      ticketsArray = data.tickets.filter(ticket => {
        console.log(ticket.stops)
        return filters.some(filter => +filter === ticket.stops) 
      })
    } else if (!filters.length) {
      ticketsArray = data.tickets 
    }
    // if (!filters.length) {
    //  ticketsArray = data.tickets 
    // } else {
    //   ticketsArray = data.tickets.filter(ticket => {
    //     console.log(ticket.stops)
    //     return filters.some(filter => +filter === ticket.stops) 
    //   })
    // }
    console.log(ticketsArray)
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

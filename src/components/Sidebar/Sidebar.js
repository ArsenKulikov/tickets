import React from 'react';
import CurrenciesToogle from '../CurrenciesToogle/CurrenciesToogle';
import TicketsFilter from '../TicketsFilter/TicketsFilter';

const Sidebar = () => {
  return (
    <div>
      <CurrenciesToogle />
      <TicketsFilter />
    </div>
  );
};

export default Sidebar;

import React, { Component } from 'react';
import TicketsBar from './components/TicketsBar/TicketsBar';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <TicketsBar />
      </div>
    );
  }
}

export default App;

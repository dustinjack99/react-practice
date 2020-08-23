import React, { Component } from 'react';
import { GuardLazyComponentToSSR } from './GuardLazyComponentToSSR';
import NavBar from './Navbar';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <NavBar />
          <GuardLazyComponentToSSR />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;

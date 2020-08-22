import React, { Component } from 'react';
import Pet from './Pet';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello bla bla bla another bla</h1>
        <Pet name='Luna' animal='Dog' breed='Havanese' />
        <Pet name='Pepper' animal='Bird' breed='Cockatiel' />
        <Pet name='Waffles' animal='Cat' breed='Gray Tabby' />
      </div>
    );
  }
}

export default App;

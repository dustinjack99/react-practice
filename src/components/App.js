import React, { Component } from 'react';
import SearchParams from './SearchParams';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <h1 id='something-important'>Adopt Me!</h1>
          <SearchParams />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;

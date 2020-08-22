import React, { Component } from 'react';
import SearchParams from './SearchParams';
import Details from './Details';
import { Router, Link } from '@reach/router';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <header>
            <Link to='/'>Adopt Me!</Link>
          </header>

          <Router>
            <SearchParams path='/' />
            <Details path='/details/:id' />
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;

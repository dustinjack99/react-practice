import React, { Component } from 'react';
import SearchParams from './SearchParams';
import DetailsWithErrorBoundary from './Details';
import { Router } from '@reach/router';
import NavBar from './Navbar';

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <NavBar />

          <Router>
            <SearchParams path='/' />
            <DetailsWithErrorBoundary path='/details/:id' />
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;

import React, { Component, lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import NavBar from './Navbar';
import DetailsWithErrorBoundary from './Details';

//how to lazy load routes
const SearchParams = lazy(() => import('./SearchParams'));

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <NavBar />

          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path='/' />
              <DetailsWithErrorBoundary path='/details/:id' />
            </Router>
          </Suspense>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;

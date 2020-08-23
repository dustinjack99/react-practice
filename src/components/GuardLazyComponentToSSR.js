import React, { Suspense, lazy, useState, useEffect } from 'react';
import Router from '@reach/router';

//how to lazy load routes
const SearchParams = lazy(() => import('./SearchParams'));
const DetailsWithErrorBoundary = lazy(() => import('./Details'));

export const GuardLazyComponentToSSR = () => {
  const [isFront, setIsFront] = useState(false);

  useEffect(() => {
    process.nextTick(() => {
      if (globalThis.window ?? false) {
        setIsFront(true);
      }
    });
  }, []);

  if (!isFront) return null;

  return (
    <Suspense fallback={() => 'loading'}>
      <Router>
        <SearchParams path='/' />
        <DetailsWithErrorBoundary path='/details/:id' />
      </Router>
    </Suspense>
  );
};

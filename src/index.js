import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (typeof window !== 'undefined') {
  const app = document.querySelector('#app');
  ReactDOM.render(<App />, app);
}

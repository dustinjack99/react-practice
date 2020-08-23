const { inRange } = require('lodash');

import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import '@babel/polyfill';
import '../style.css';

// any other browser-only things

hydrate(<App />, document.querySelector('#app'));

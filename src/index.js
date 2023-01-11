import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const subredditsToShow = [
  'reactjs',
  'learnreactjs',
  'pics',
  'reactjs',
  'learnreactjs',
  'svelte',
  'javascript',
  'learnreactjs'
];
ReactDOM.render(
  <App subredditsToShow={subredditsToShow} />,
  document.getElementById('root')
);

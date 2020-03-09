import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root'

window.addEventListener('DOMContentLoaded', () => {
  // debugger
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root)
});
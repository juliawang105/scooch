import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from "./store/store";

window.addEventListener('DOMContentLoaded', () => {
  // debugger

   let store;
   if (window.currentUser) {
    //  debugger
     const preloadedState = {
       entities: {
         users: window.currentUser,
       },
       session: { id: window.currentUser.id }
     };
     store = configureStore(preloadedState);
     delete window.currentUser;
   } else {
    //  debugger
     store = configureStore();
   }

   window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});
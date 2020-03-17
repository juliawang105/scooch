import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from "./store/store";

window.addEventListener('DOMContentLoaded', () => {
  // debugger
 
  

   let store;
   if (window.currentUser) {
     const preloadedState = {
       entities: {
         users: window.currentUser.users,
       },
       session: { id: Object.keys(window.currentUser.users)[0] }
     };
     store = configureStore(preloadedState);
     delete window.currentUser;
   } else {
     store = configureStore();
   }

   window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});
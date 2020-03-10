import React from 'react';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import SplashContainer from './components/splash_container'

const App = () => (
  <div className="boss">Welcome to Scooch
  
  <Switch>
    <Route path="/" component={SplashContainer}/>
  </Switch>
  
  </div>
);

export default App;
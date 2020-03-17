import React from 'react';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import SplashContainer from './components/splash_container.js';
import LoginContainer from './components/login_form_container';
import SignupContainer from './components/signup_form_container'
import {AuthRoute, ProtectedRoute} from './util/routes_util';
import Chat from './components/chat'

const test = () => {
  return(
    <div className="test">Test</div>
  )
}
const App = () => (
  <div className="boss">
  
  <Switch>
    <Route path="/test" component={test}/>
    <Route exact path="/signup" component={SignupContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/" component={SplashContainer}/>
    <AuthRoute exact path="/users" component={Chat}/>
  </Switch>
  
  </div>
);

export default App;
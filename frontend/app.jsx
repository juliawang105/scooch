import React from 'react';
import { Route, Switch, Link, NavLink } from "react-router-dom";
import SplashContainer from './components/splash_container.js';
import LoginContainer from './components/login_form_container';
import SignupContainer from './components/signup_form_container'
import {AuthRoute, ProtectedRoute} from './util/routes_util';
import ChatContainer from './components/chat_container'

const test = () => {
  return(
    <div className="test">Test</div>
  )
}
const App = () => (
  <div className="boss">
  
  <Switch>
    <Route path="/test" component={test}/>
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />
    <ProtectedRoute exact path="/users" component={ChatContainer}/>
    <Route path="/" component={SplashContainer}/>
  </Switch>
  
  </div>
);

export default App;
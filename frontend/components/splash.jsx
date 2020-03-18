import React from 'react';
import {NavLink} from 'react-router-dom'

class Splash extends React.Component{
  constructor(props){
    super(props)
  };

  render(){
    let user; 
    if(!this.props.user){
      user = (
        <div className="sessions">
          <NavLink to="/login" className="signin">
            Sign In
          </NavLink>
          <NavLink to="/signup" className="start">
            GET STARTED
          </NavLink>
        </div>
      );
    } else {
      user = (
        <div>Hello User</div>
      )
    }
    return (
      <div className="splash">
        <div className="navbar">
          <div className="name">
            <div className="logo"></div>
            <div className="scooch">scooch</div>
          </div>

          {user}
          
        </div>
        <div className="sec1">Section 1</div>
        <div className="sec2">Section 2</div>
        <div className="sec3">Section 3</div>
        <div className="footer">Footer</div>
      </div>
    );
    
  }
};

export default Splash;
import React from 'react';
import {NavLink} from 'react-router-dom'

class Splash extends React.Component{
  constructor(props){
    super(props)
  };

  render(){
    // debugger
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
        <div>
          <NavLink to="/users">Hello {this.props.user.f_name}</NavLink>
        </div>
      );
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
        <div className="sec1">
          <div className="team">
            <h1>Scooch brings teams togeher, wherever you are</h1>
            <h3>
              With all of your communcation and tools in one place, remote teams
              will stay productive no matter where you're working from.
            </h3>
          </div>
         
            <img className="slack_image" src="slack1.jpg" alt="" />
          
        </div>
        <div className="sec2">Section 2</div>
        <div className="sec3">Section 3</div>
        <div className="footer">Footer</div>
      </div>
    );
    
  }
};

export default Splash;
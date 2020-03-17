import React from 'react'

class SessionForm extends React.Component{
  constructor(props){
    super(props)

    if(this.props.form === 'signup'){
      this.state = {
        username: "",
        email: "",
        password: ""
      }
    } else {
      this.state = {
        email: "",
        password: ""
      }
    };
  }

  handleInput(field){
    return e => {
      this.setState({[field]: e.target.value})
    };
  };

  render(){
    let form;
    if(this.props.form === 'login'){
      form = 
      <form>
        <input onChange={this.handleInput('email')} type="text" name="" id="" placeholder="email"/>
        <input onChange={this.handleInput('password')}type="text" name="" id="" placeholder="password"/>
      </form>
      
    } else {
      form = <div>signup</div>
    }

    // debugger
    return(
      <div>{form}</div>
      
    )
  }
};

export default SessionForm;
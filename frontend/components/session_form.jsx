import React from 'react'

class SessionForm extends React.Component{
  constructor(props){
    super(props)

    if(this.props.form === 'signup'){
      this.state = {
        f_name: "",
        l_name:"",
        email: "",
        password: ""
      }
    } else {
      this.state = {
        email: "",
        password: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field){
    return e => {
      this.setState({[field]: e.target.value})
    };
  };

  handleSubmit(){
    event.preventDefault();
    this.props.processForm(this.state)
  }

  render(){
    let text = this.props.form.toUpperCase()
    let form;
    if(this.props.form === 'login'){
      form = 
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleInput('email')} type="text" name="" id="" placeholder="email"/>
        <input onChange={this.handleInput('password')}type="text" name="" id="" placeholder="password"/>
        <button>{text}</button>
      </form>
      
    } else {
      form = (
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput("f_name")}
            type="text"
            name=""
            id=""
            placeholder="first name"
          />

          <input
            onChange={this.handleInput("l_name")}
            type="text"
            name=""
            id=""
            placeholder="last name"
          />

          <input
            onChange={this.handleInput("email")}
            type="text"
            name=""
            id=""
            placeholder="email"
          />
          <input
            onChange={this.handleInput("password")}
            type="text"
            name=""
            id=""
            placeholder="password"
          />
          <button>{text}</button>
        </form>
      );
    }

    // debugger
    return(
      <div>{form}</div>
      
    )
  }
};

export default SessionForm;
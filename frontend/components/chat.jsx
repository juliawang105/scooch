import React from 'react';

class Chat extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let {f_name, l_name, email} = this.props.user;
    debugger
    return(
      <div>
        Welcome {f_name}

        <button onClick={()=> this.props.logout()}>Log Out</button>
      </div>
    )
  }
};

export default Chat; 
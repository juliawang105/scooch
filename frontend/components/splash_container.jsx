import { connect } from 'react-redux';
import Splash from './splash';
import { login, signup } from '../actions/session_actions';


const mDTP = dispatch => {
  return({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  });
};

export default connect(null, mDTP)(Splash);
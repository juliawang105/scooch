import SessionForm from './session_form';
import { connect } from 'react-redux'
import { login } from '../actions/session_actions';

const mSTP = state => {
  return ({ 
    form: 'login'
  })
};

const mDTP = dispatch => {
  return (
    {
      login: user => dispatch(login(user))
    }
  )
};

export default connect(mSTP, mDTP)(SessionForm)


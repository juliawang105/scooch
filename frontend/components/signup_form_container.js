import SessionForm from './session_form';
import { connect } from 'react-redux'
import { signup } from '../actions/session_actions';

const mSTP = state => {
  return ({
    form: 'signup'
  })
};

const mDTP = dispatch => {
  return (
    {
      processForm: user => dispatch(signup(user))
    }
  )
};

export default connect(mSTP, mDTP)(SessionForm)
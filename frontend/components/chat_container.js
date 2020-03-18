import { connect } from 'react-redux';
import Chat from './chat';
import { logout } from '../actions/session_actions'

const mSTP = state => {
  debugger
  return(
    {user: state.entities.users}
  )
};

const mDTP = dispatch => {
  return(
    {
      logout: () => dispatch(logout())
    }
  )
}

export default connect(mSTP, mDTP)(Chat);

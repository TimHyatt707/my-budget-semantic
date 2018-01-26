import { compose, lifecycle } from 'recompose';

import { connect } from 'react-redux';

import LandingPage from '../../components/LandingPage';

function mapStateToProps(state, ownProps) {
  return {
    showLogin: state.showLogin
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onShowLoginForm: () => dispatch({ type: 'SHOW_LOGIN_FORM' }),
    onCloseLoginForm: () => dispatch({ type: 'CLOSE_LOGIN_FORM' }),
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default compose(connectToStore)(LandingPage);

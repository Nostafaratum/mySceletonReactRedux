import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './Login.component';
import { login } from './Login.action';

const mapStateToProps = state => ({
  loginStatus: state.admin.loginStatus,
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);

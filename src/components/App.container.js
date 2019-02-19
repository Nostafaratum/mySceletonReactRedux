import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './App.component';

const mapStateToProps = store => ({
  auth: store.admin.auth,
  LoginStatus: store.admin.userData.status,
});

export default withRouter(connect(mapStateToProps)(App));

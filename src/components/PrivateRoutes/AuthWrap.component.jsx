import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import T from 'prop-types';

import { routes } from '../../configs/routes';

class AuthWrap extends PureComponent {
  render() {
    const { auth, exact, path, component } = this.props;
    return auth ? <Route exact={exact} path={path} component={component} /> : <Redirect to={routes.login} />;
  }
}

AuthWrap.propTypes = {
  auth: T.bool.isRequired,
  exact: T.bool.isRequired,
  path: T.string.isRequired,
  component: T.oneOfType([T.element, T.node]).isRequired,
};

export default AuthWrap;

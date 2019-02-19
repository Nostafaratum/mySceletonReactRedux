import React, { Fragment, PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import T from 'prop-types';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';

import AlertTemplate from './Common/AlertTemplate';

import { routes } from '../configs/routes';
import AuthWrap from './PrivateRoutes/AuthWrap.container';

import Login from './Login/Login.container';
import Root from './Root/Root.container';

import { PreloaderOnAllPage } from './Common/Preloader';

class App extends PureComponent {
  render() {
    window.scrollTo(0, 0);
    const { auth, LoginStatus } = this.props;
    return (
      <Fragment>
        <Alert
          contentTemplate={AlertTemplate}
          stack={{ limit: 5 }}
          effect="scale"
          html
          timeout={3000}
          position="top-right"
          offset={50}
        />
        {LoginStatus === 'request' ? (
          <PreloaderOnAllPage />
        ) : (
          <Switch>
            <AuthWrap exact path={routes.root} component={Root} />
            <Route exact path={routes.login} component={() => (auth ? <Redirect to={routes.root} /> : <Login />)} />
            <Redirect to={routes.root} />
          </Switch>
        )}
      </Fragment>
    );
  }
}

App.propTypes = {
  auth: T.bool.isRequired,
  LoginStatus: T.string.isRequired,
};

export default App;

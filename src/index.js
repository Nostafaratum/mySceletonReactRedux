import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './components/App.container';
import configureStore from './configs/configureStore';
import rootSaga from './configs/sagas';
import interceptors from './configs/interceptors';

import './index.css';

// import { getUser } from './components/Login/Login.action';

const store = configureStore();
store.runSaga(rootSaga);

// if (localStorage.cresttokenTokenAdmin || localStorage.cresttokenToken) {
//   store.dispatch({ type: getUser.TRIGGER });
// }

const history = createHistory();
interceptors.init(store, history);

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    root
  );
};

render();

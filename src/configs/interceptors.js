import axios from 'axios';
import { userLogout } from '../commonAction/logout/logout.action';
import { routes } from './routes';

export default {
  init: (store, history) => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 401) {
          store.dispatch(userLogout());
          history.push(routes.login);
        }

        return Promise.reject(error);
      }
    );
  },
};

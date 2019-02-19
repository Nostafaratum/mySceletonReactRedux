import { combineReducers } from 'redux';
import { userLogout } from '../commonAction/logout/logout.action';

import admin from './admin.reducer';

const appReducer = combineReducers({
  admin,
});

export default (state, action) => {
  if (action.type === userLogout.SUCCESS) {
    state = undefined; // eslint-disable-line
  }
  return appReducer(state, action);
};

import { takeLatest, all } from 'redux-saga/effects';

import {
  login,
  sagaOnLogin,
  // getUser, sagaOnUpdataPage
} from './Login.action';

export function* loginWatcher() {
  yield all([
    takeLatest(login.TRIGGER, sagaOnLogin),
    // takeLatest(getUser.TRIGGER, sagaOnUpdataPage)
  ]);
}

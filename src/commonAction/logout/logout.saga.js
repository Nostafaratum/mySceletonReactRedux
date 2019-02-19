import { takeLatest, all } from 'redux-saga/effects';

import { userLogout, sagaOnUserLogout } from './logout.action';

export function* logoutWatcher() {
  yield all([takeLatest(userLogout.TRIGGER, sagaOnUserLogout)]);
}

import { all, fork } from 'redux-saga/effects';

import { loginWatcher } from '../components/Login/Login.saga';

export default function* rootSaga() {
  yield all([fork(loginWatcher)]);
}

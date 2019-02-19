import { createRoutine } from 'redux-saga-routines';
import { put, call } from 'redux-saga/effects';

import setAuthorizationToken from '../../utils/setAuthorizationToken';

import api from '../../configs/api';
import { routes } from '../../configs/routes';
import notification from '../Common/Notification';
// import { userLogout } from '../../commonAction/logout/logout.action';

export const login = createRoutine('LOGIN');
export const getUser = createRoutine('GETUSER');

export function* sagaOnLogin({ payload }) {
  yield put(login.request());
  try {
    const apiResult = yield call(() => api.auth.login(payload.data));
    if (apiResult.data.Status === 'success') {
      const { Token, User } = apiResult.data.Data;
      localStorage.setItem('cresttokenTokenAdmin', Token);
      setAuthorizationToken(Token);
      localStorage.removeItem('cresttokenToken');
      yield put(login.success({ User }));
      payload.push(routes.root);
    } else {
      notification('error', apiResult.data.Message ? apiResult.data.Message : 'Error. Please try again later.');
      yield put(login.failure(apiResult.data.Message ? apiResult.data.Message : 'Error. Please try again later.'));
    }
  } catch (e) {
    notification('error', 'Error. Please try again later.');
    yield put(login.failure('sorry, error'));
  }
}

// export function* sagaOnUpdataPage() {
//   yield put(getUser.request());
//   try {
//     setAuthorizationToken(localStorage.cresttokenTokenAdmin);
//     const apiResult = yield call(() => api.auth.getUser());
//     if (apiResult.data.Status === 'success') {
//       yield put(getUser.success(apiResult.data.Data));
//     } else {
//       yield put(getUser.failure(apiResult.data.Message ? apiResult.data.Message : 'Error. Please try again later.'));
//       yield put(userLogout());
//     }
//   } catch (e) {
//     yield put(getUser.failure());
//     yield put(userLogout());
//     notification('error', 'Logout');
//   }
// }

import { put } from 'redux-saga/effects';
import { createRoutine } from 'redux-saga-routines';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

export const userLogout = createRoutine('USERLOGOUT');

export function* sagaOnUserLogout() {
  localStorage.removeItem('cresttokenTokenAdmin');
  localStorage.removeItem('cresttokenToken');
  setAuthorizationToken(false);
  yield put(userLogout.success());
}

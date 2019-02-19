import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../components/Login/Login.action';
import { userLogout } from '../commonAction/logout/logout.action';
// import { getTokenForForgotPassword } from '../components/ForgotPassword/ForgotPassword.action';

const defaultAdmin = {
  Username: '',
  Email: '',
  Name: '',
};

const defaultUserData = {
  data: defaultAdmin,
  status: 'none',
  error: '',
};

const initialState = {
  forgotPassword: {
    data: {},
    status: 'none',
    error: '',
  },
  userData: defaultUserData,
  auth: false,
};

const userData = handleActions(
  {
    [actions.login.REQUEST](state, { payload }) {
      return {
        data: defaultAdmin,
        status: 'request',
        error: '',
      };
    },
    [actions.login.SUCCESS](state, { payload }) {
      return {
        data: payload,
        status: 'success',
        error: '',
      };
    },
    [actions.login.FAILURE](state, { payload }) {
      return {
        data: defaultAdmin,
        status: 'failure',
        error: payload,
      };
    },
    [userLogout.SUCCESS](state, { payload }) {
      return {
        data: defaultAdmin,
        status: 'none',
        error: '',
      };
    },
  },
  initialState.userData
);

// const forgotPassword = handleActions(
//   {
//     [getTokenForForgotPassword.REQUEST]() {
//       return {
//         data: {},
//         status: 'request',
//         error: '',
//       }
//     },
//     [getTokenForForgotPassword.SUCCESS]() {
//       return {
//         data: {},
//         status: 'success',
//         error: '',
//       }
//     },
//     [getTokenForForgotPassword.FAILURE](state, { payload }) {
//       return {
//         data: {},
//         status: 'failure',
//         error: payload,
//       }
//     },
//   },
//   initialState.forgotPassword
// );

const auth = handleActions(
  {
    [actions.login.SUCCESS]() {
      return true;
    },
    [actions.getUser.SUCCESS]() {
      return true;
    },
    [actions.login.FAILURE]() {
      return false;
    },
    [userLogout.SUCCESS]() {
      return false;
    },
  },
  false
);

const admin = combineReducers({
  // forgotPassword,
  userData,
  auth,
});

export default admin;

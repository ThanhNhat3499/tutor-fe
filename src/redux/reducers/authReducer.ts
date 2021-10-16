import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, AUTHENTICATED, LOGOUT, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_SUCCESS, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from '../type';

const initialState: any = {
  token: null,
  user: null,
  isLogin: false
};

const authReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case AUTHENTICATED:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
          isLogin: true
      });
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT:
      return Object.assign({}, state, initialState);
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        user: action.payload
      });
    case UPDATE_USER_FAIL:
    case UPDATE_PASSWORD_SUCCESS:
    case UPDATE_PASSWORD_FAIL:
      return;
  }

  return state;
}

export default authReducer;
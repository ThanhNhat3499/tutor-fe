import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_USER_SUCCESS, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from '../type';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../type';
import { loadAPI } from '../../utils/apiService.utils';
import { User } from '../../styles/types/Models';

export const login = ( data: any, props: any ) => ( dispatch: any ) => {
  console.log("login");
  return loadAPI('/auth/login', data, 'POST')
            .then(res => {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              dispatch(
                {
                  type: LOGIN_SUCCESS,
                  payload: {
                    token: res.data.token,
                    user: res.data.user
                  }
                }
              )
              return res.status;
            })
            .catch(err => {
              dispatch({ type: LOGIN_FAIL, payload: "Login fail!" });
              return err.response.status;
            })
};

export const register = ( data: any, props: any ) => ( dispatch: any ) => {
  return loadAPI('/auth/register', data, 'POST')
            .then(res => {
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              dispatch(
                {
                  type: REGISTER_SUCCESS,
                  payload: {
                    token: res.data.token,
                    user: res.data.user
                  }
                }
              )
            })
            .catch(err => {
              dispatch(
                {
                  type: REGISTER_FAIL,
                  payload: "Register fail!"
                }
              );
              return err.response.status;
            })
};

export const logout = () => (dispatch: any) => {
  localStorage.clear();
  return dispatch({ type: LOGOUT });
}

export const updatePassword = (id: string, data: any) => (dispatch: any) => {
  return loadAPI(`/${id}/password`, data, 'PUT')
            .then( res => {
              dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.newPassword });
              return res.status;
            } )
            .catch( err => {
              dispatch({ type: UPDATE_PASSWORD_FAIL });
              return err.response.status;
            } )
}

export const updateUser = (id: string, data: User) => (dispatch: any) => {
  return loadAPI(`/${id}`, data, 'PUT')
            .then(res => {
              dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
              return res.status;
            })
            .catch(err => {
              dispatch({ type: UPDATE_USER_FAIL });
              return err.response.status;
            })
}
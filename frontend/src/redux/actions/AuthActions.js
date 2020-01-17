import {
  LOGIN_START,
  LOGIN_SUCCESSFULL,
  LOGIN_FAILED,
  LOGOUT_SUCCESSFULL,
  USER_LOADING,
  USER_LOADED,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_REQUIRED
} from "../actions/types";
import { setToken, removeToken, getToken } from "./Utils";
import axios from "axios";

export const loginUser = userCredentials => dispatch => {
  dispatch({
    type: LOGIN_START,
    isAuthenticated: false,
    isLoading: true,
    user: null,
    errors: null
  });
  axios
    .post("http://127.0.0.1:8000/api-auth/login/", {
      email: userCredentials.email,
      password: userCredentials.password
    })
    .then(response => {
      setToken(response.data.key);
      dispatch({
        type: LOGIN_SUCCESSFULL,
        isAuthenticated: true,
        user: response.data.user,
        isLoading: false,
        errors: null
      });
    })
    .catch(error => {
      console.log(error.message);
      dispatch({
        type: LOGIN_FAILED,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        errors: error
      });
    });
};

export const logoutUser = () => dispatch => {
  let headers = { "Content-Type": "application/json" };
  axios
    .post("http://127.0.0.1:8000/api-auth/logout/", { headers })
    .then(data => {
      removeToken();
      dispatch({
        type: LOGOUT_SUCCESSFULL,
        isAuthenticated: false,
        isLoading: false,
        errors: null
      });
    });
};

export const fetchUser = () => dispatch => {
  dispatch({ type: USER_LOADING, isLoading: true, user: [] });
  const token = getToken();
  if (token) {
    fetch("http://127.0.0.1:8000/api-auth/fetch-user/", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.key);
        dispatch({
          type: USER_LOADED,
          isAuthenticated: true,
          user: data,
          isLoading: false,
          errors: null
        });
      })
      .catch(error => {
        dispatch({
          type: AUTHENTICATION_ERROR,
          token: null,
          user: [],
          isAuthenticated: false,
          isLoading: false,
          errors: error
        });
      });
  } else {
    dispatch({
      type: AUTHENTICATION_REQUIRED,
      token: null,
      user: [],
      isAuthenticated: false,
      isLoading: false,
      errors: null
    });
  }
};

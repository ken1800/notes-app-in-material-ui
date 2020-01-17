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

const initialState = {
  isAuthenticated: localStorage.getItem("token") ? true : false,
  isLoading: true,
  user: [
    {
      username: "",
      name: ""
    }
  ],
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSFULL:
    case LOGIN_FAILED:
    case LOGIN_START:
    case LOGOUT_SUCCESSFULL:
    case USER_LOADING:
    case USER_LOADED:
    case AUTHENTICATION_ERROR:
    case AUTHENTICATION_REQUIRED:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
        isLoading: action.isLoading,
        user: action.user,
        errors: action.errors
      };
    default:
      return state;
  }
}

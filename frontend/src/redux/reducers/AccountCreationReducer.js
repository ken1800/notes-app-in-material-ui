import {
  SIGNUP_START,
  SIGNUP_SUCCESSFULL,
  SIGNUP_ERROR
} from "../actions/types";

const initialState = {
  isAccountCreated:
    typeof localStorage["token"] == "undefined"
      ? "can create account"
      : "cannot created account",
  isLoading: true,
  errors: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_START:
    case SIGNUP_SUCCESSFULL:
    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        errors: action.errors,
        isAccountCreated: action.accountCreated
      };
    default:
      return state;
  }
}

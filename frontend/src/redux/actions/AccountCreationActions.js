import { SIGNUP_START, SIGNUP_SUCCESSFULL, SIGNUP_ERROR } from "./types";
import { setToken } from "./Utils";
import Axios from "axios";

export const createUser = userCredentials => dispatch => {
  dispatch({
    type: SIGNUP_START,
    isLoading: true,
    accountCreated: "account creation started",
    errors: null
  });
  Axios.post("http://127.0.0.1:8000/api-auth/registration/", {
    first_name: userCredentials.firstName,
    last_name: userCredentials.lastName,
    username: userCredentials.username,
    password1: userCredentials.password1,
    password2: userCredentials.password2,
    email: userCredentials.email
  })
    .then(response => {
      setToken(response.data.key);
      dispatch({
        type: SIGNUP_SUCCESSFULL,
        isLoading: false,
        accountCreated: true,
        errors: null
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: SIGNUP_ERROR,
        isLoading: false,
        accountCreated: "account not created",
        errors: error
      });
    });
};

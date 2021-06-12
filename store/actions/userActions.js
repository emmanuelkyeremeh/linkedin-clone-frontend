import axios from "axios";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

export const signup =
  (firstName, lastName, avatar, avatar_filename, bio, email, password) =>
  async (dispatch) => {
    dispatch({
      type: USER_SIGNUP_REQUEST,
      payload: {
        firstName,
        lastName,
        avatar,
        avatar_filename,
        bio,
        email,
        password,
      },
    });
    try {
      const res = await axios.post("http://localhost:4000/api/users/signup", {
        firstName,
        lastName,
        avatar,
        avatar_filename,
        bio,
        email,
        password,
      });
      dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("userDataLinkedin", JSON.stringify(res.data));
    } catch (error) {
      dispatch({
        type: USER_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
  try {
    const res = await axios.post("http://localhost:4000/api/users/login", {
      email,
      password,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const usersignout = () => (dispatch) => {
  localStorage.removeItem("userDataLinkedin");
  dispatch({ type: USER_SIGNOUT });
};

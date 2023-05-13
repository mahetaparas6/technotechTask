import {
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "../action/actionType";
import { reject } from "lodash";
import api from "../../network/api";

export const LoginApi = (data) => {
  try {
    return new Promise((resolve, reject) => {
      api
        .post("login.php", data)
        .then((response) => {
          console.log("Response login" + JSON.stringify(response.body));
          if (response.body.statuscode == 200) {
            resolve(response.body);
          } else {
            resolve(response.body);
          }
        })
        .catch(reject);
    });
  } catch (error) {
    reject(error);
  }
};

export const loginUsers = (data) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_USER_LOADING,
      payload: true,
    });
    new Promise((resolve, reject) => {
      api
        .post("login.php", data)
        .then((response) => {
          console.log("Response" + JSON.stringify(response.body));
          if (response.body.success) {
            dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: response.body,
            });
          } else {
            dispatch({
              type: LOGIN_USER_ERROR,
              payload: response.body,
            });
          }
        })
        .catch(reject);
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: error,
    });
  }
};


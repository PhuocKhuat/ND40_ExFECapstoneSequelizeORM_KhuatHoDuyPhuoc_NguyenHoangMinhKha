import axios from "axios";
import store from "..";
import { REFRESH_TOKEN } from "../action/action";

export const http = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: {
    token: JSON.parse(localStorage.getItem("LOGIN_USER"))?.data?.token,
  },
});

http.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      (error.response.data.message =
        "The token has expired, wrong security key or is invalid")
      ){
      store.dispatch({ type: REFRESH_TOKEN });
    }
      return Promise.reject(error);
  }
);

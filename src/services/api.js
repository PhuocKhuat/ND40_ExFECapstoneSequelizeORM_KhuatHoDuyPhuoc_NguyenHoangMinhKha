import axios from "axios";
import store from "..";
import { REFRESH_TOKEN } from "../action/action";
import { capstoneService } from "./CapstoneService";

export const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    token: JSON.parse(localStorage.getItem("LOGIN_USER"))?.data?.token,
  },
});

http.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem("LOGIN_USER"))?.data?.token;
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

async function refreshAuthLogic() {
  const { data } = await capstoneService.refreshToken();
  localStorage.setItem("LOGIN_USER", JSON.stringify(data));
  return data?.data?.token;
}

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response?.data?.message ===
        "The token has expired, wrong security key or is invalid") ||
      (error.name === "AxiosError")
    ) {
      // store.dispatch({ type: REFRESH_TOKEN });

      const newToken = await refreshAuthLogic();

      // Update the headers with the new token
      originalRequest.headers.token = newToken;

      // Retry the original request with the new token
      return http(originalRequest);
    }
    return Promise.reject(error);
  }
);

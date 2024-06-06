import axios from "axios";
import store from "..";
import { capstoneService } from "./CapstoneService";
import { isLoadingOff, isLoadingOn } from "../action/dispatch";

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
      // Đưa bật loading lên, nếu có token thì bật, ngược lại khi ấn logout, không có token thì tắt.
      store.dispatch(isLoadingOn());
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
    store.dispatch(isLoadingOff());
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    try {
      if (
        error.response?.data?.message ===
          "The token has expired, wrong security key or is invalid" ||
        error.name === "AxiosError"
      ) {
        // store.dispatch({ type: REFRESH_TOKEN });

        const newToken = await refreshAuthLogic();

        // Update the headers with the new token
        originalRequest.headers.token = newToken;

        // Retry the original request with the new token
        return await http(originalRequest);
      }
    } catch (error) {
      store.dispatch(isLoadingOff());
      return Promise.reject(error);
    } finally {
      store.dispatch(isLoadingOff());
    }

    return Promise.reject(error);
  }
);

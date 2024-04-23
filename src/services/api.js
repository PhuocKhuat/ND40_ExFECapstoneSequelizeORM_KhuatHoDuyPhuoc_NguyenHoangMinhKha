import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: {
    token:
      JSON.parse(localStorage.getItem("LOGIN_USER"))?.data?.token,
  },
});

export { http };

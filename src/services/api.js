import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  headers: {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MTM3NTA4MzQsImV4cCI6MTcxODkzNDgzNH0.abC6T3cmc7Zoz1wdPmz0fcR-9WtzxurXWBKKrn4WemA",
  },
});

export { http };

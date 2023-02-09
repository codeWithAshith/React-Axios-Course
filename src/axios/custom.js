import axios from "axios";

// to customize request
// here we are accepting only "application/json"
// instead of */*
const authFetch = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;

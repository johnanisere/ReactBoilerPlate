// axiosconfig.js
import axios from "axios";
import { store } from "./App";
import { unauthorize } from "./utils/helpers";
// configure base url
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE}/v1`
});

// intercept requests and add token
instance.interceptors.request.use(config => {
  const { token } = store.getState().authentication;

  if (token) {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  } else {
    return config;
  }
});

// intercept response and handle 401 errors
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Do something with response data

    if (401 === error.response.status) {
      unauthorize();
    }
    return error;
  }
);
export default instance;

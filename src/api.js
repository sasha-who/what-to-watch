import axios from "axios";
import {SERVER_TIMEOUT, HttpStatus, Url} from "./const";

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: Url.WHAT_TO_WHATCH,
    timeout: SERVER_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpStatus.UNAUTHORIZED) {
      onUnauthorized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

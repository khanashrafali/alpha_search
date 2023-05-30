import axios from "axios";
import _ from "lodash";

const BASE_URL = "http://54.198.149.169:8000";

const defaultHeaders = {
  Accept: "applications/json",
  "content-type": "application/json",
};

const getHeaders = (customHeaders) => {
  const headers = {
    ...defaultHeaders,
    ...customHeaders,
  };
  return headers;
};

const apiService = axios.create({});

const url = (path, params) => {
  const sections = path.split(":");
  const sectionsWithParams = sections.map((section) =>
    _.startsWith(section, "/") ? section : params[section]
  );
  const pathWithParams = sectionsWithParams.join("");
  return BASE_URL + pathWithParams;
};

export const get = (path, params = {}) =>
  apiService.get(url(path, params), { params, headers: getHeaders() });

export const post = (path, params = {}) =>
  apiService.post(url(path, params), params, { headers: getHeaders() });

export const put = (path, params = {}) =>
  apiService.put(url(path, params), params, {
    headers: getHeaders(),
  });

export const deleteRequest = (path, params = {}) =>
  apiService.delete(url(path, params), { params, headers: getHeaders() });

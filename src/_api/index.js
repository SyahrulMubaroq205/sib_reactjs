// src/_api/index.js
import axios from "axios";

const url = "http://127.0.0.1:8000";

export const API = axios.create({
  baseURL: `${url}/api`,
});

// URL untuk storage book image
export const bookImageStorage = `${url}/storage`;

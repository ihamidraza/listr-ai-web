import axios from "axios";

import { BASE_URL } from "../../apiConfig";

console.log(import.meta.env.SERVER_URL, BASE_URL);
// Create an instance of axios
export const server = axios.create({
  baseURL: BASE_URL,
});

// Set the AUTH token for any request

export const setAuth = (token: string) => {
  server.defaults.headers.common["Authorization"] = "Bearer " + token;
};

export const revokeAuth = () => {
  delete server.defaults.headers.common["Authorization"];
};

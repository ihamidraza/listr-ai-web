import axios from 'axios';

const serverURL = import.meta.env.SERVER_URL || 'http://localhost:3000'
// Create an instance of axios
export const server = axios.create({
    baseURL: serverURL
});

// Set the AUTH token for any request

export const setAuth = (token: string) => {
    server.defaults.headers.common['Authorization'] = 'Bearer ' + token;

}

export const revokeAuth = () => {
    delete server.defaults.headers.common['Authorization']

}
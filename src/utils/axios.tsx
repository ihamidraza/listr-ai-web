import axios from 'axios';

// Create an instance of axios
export const server = axios.create({
    baseURL: 'https://your-api-url.com'
});

// Set the AUTH token for any request

export const setAuth = (token: string) => {
    server.defaults.headers.common['Authorization'] = 'Bearer ' + token;

}

export const revokeAuth = () => {
    delete server.defaults.headers.common['Authorization']

}
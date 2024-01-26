import axios from "axios";

export const getToken = () => {
    
}

const headerToken = axios.create({
    baseURL: 'http://127.0.0.1:8000',
});

const addTokenRequest = (config) => {
    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}

headerToken.interceptors.request.use(addTokenRequest);

export default headerToken
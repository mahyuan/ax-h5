import axios from 'axios';
import config from '../config/dev.env';
import { getToken } from './auth'
const baseUrl = `${config.PROTOCOL}://${config.DOMAIN}:${config.PORT}`

const service = axios.create({
    timeout: config.TIMEOUT || 20000,
    withCredentials: true,
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:7001' : baseUrl,
});

service.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            config.headers['token'] = token
        }
        return config;
    },
    err => {
        Promise.reject(err);
    }
);

service.interceptors.response.use(
    resopnse => {
        return resopnse;
    },
    err => {
        Promise.reject(err);
    }
);

export default service

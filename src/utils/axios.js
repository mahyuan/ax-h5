import axios from 'axios';
import Cookies from 'js-cookie';
import config from '../config/dev.env';
const TokenKey = 'Ax_token';
const token = Cookies.get(TokenKey);

const service = axios.create({
    timeout: 5000,
    baseURL: `${config.PROTOCOL}://${config.DOMAIN}:${config.PORT}`
    // headers: {'X-Custom-Header': 'foobar'}
});

service.interceptors.request.use(
    config => {
        if (token) {
            config.headers['token'] = token;
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

export default service;

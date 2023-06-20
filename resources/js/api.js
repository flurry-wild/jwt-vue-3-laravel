import axios from 'axios';
import router from './router';

const api = axios.create();

api.interceptors.request.use(config => {
    //console.log('send token');
    //console.log(localStorage.getItem('access_token'));
    if (localStorage.getItem('access_token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }

    return config;
}, error => {})

export default api;

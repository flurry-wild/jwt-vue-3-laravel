import API from './api';

export default class AuthService {
    static auth(callback) {
        return new Promise((resolve, reject) => {
            callback()
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                if (err.response.data.message === 'Token has expired') {
                    API.post('api/auth/refresh').then(res => {
                        localStorage.setItem('access_token', res.data.access_token);

                        callback().then(dataResponse => {
                            resolve(dataResponse.data);
                        })
                    });
                }
            });
        })
    }
}

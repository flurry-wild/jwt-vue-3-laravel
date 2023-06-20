<template>
    <div class="w-25 m-auto">
        {{ secretData }}
    </div>
</template>
<script>
import API from '../../api';

export default {
    name: 'Index',
    data() {
        return {
            secretData: null
        }
    },
    mounted() {
        this.getSecretData();
    },
    methods: {
        getSecretData() {
            API.get('/api/auth/index').then(res => {
                this.secretData = res.data;
            }).catch(err => {
                if (err.response.data.message === 'Token has expired') {
                    API.post('api/auth/refresh').then(res => {
                        localStorage.setItem('access_token', res.data.access_token);

                        API.get('/api/auth/index').then(dataResponse => {
                            this.secretData = dataResponse.data;
                        })
                    });
                }
            })
        }
    }
}
</script>

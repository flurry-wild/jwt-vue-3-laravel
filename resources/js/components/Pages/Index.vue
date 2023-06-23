<template>
    <div class="w-25 m-auto">
        {{ secretData }}
    </div>
</template>
<script>
import AuthService from '../../AuthService';
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
            const request = () => {
                return new Promise((resolve, reject) => {
                    resolve(API.get('/api/auth/index'));
                });
            }

            AuthService.auth(request).then(data => {
                this.secretData = data;
            });
        }
    }
}
</script>

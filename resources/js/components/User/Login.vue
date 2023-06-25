<template>
    <div class="w-25 m-auto">
        <div class="alert mt-2" :class="loginResult.colorClass" role="alert" v-if="loginResult.visible">
            {{ loginResult.message }}
        </div>
        <input v-model="email" type="email" class="form-control mt-3 mb-3" placeholder="email">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <input @click.prevent="login" type="submit" class="btn btn-primary">
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            loginResult: {
                visible: false,
                message: '',
                colorClass: ''
            },
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login', {email: this.email, password: this.password})
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token);

                    this.loginResult.message = 'You have successfully logged in';
                    this.loginResult.colorClass = 'alert-success';
                    this.loginResult.visible = true;

                    setTimeout(() => {
                        this.$store.state.updater += 1;

                        this.$router.push({name: 'pages.index'});
                    }, 3000);
                }).catch(error => {
                    if (error.response.status === 401) {
                        this.loginResult.message = 'Invalid authorization data';
                        this.loginResult.colorClass = 'alert-danger';
                        this.loginResult.visible = true;
                    }
                });
        }
    }
}
</script>

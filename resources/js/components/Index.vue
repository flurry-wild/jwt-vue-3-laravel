<template>
    <div class="menu" :data-updater="$store.state.updater">
        <router-link v-if="accessToken" :to="{ name: 'pages.index' }" class="p-2">Test page</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.login' }" class="p-2">Login</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.registration' }" class="p-2">Registration</router-link>
        <a v-if="accessToken" href="#" @click.prevent="logout">Logout</a>
    </div>
    <router-view></router-view>
</template>

<script>
import API from '../api';
import AuthService from '../AuthService';

export default {
    name: "Index",
    data() {
        return {
            accessToken: null
        }
    },
    mounted() {
        this.getAccessToken();
    },
    updated() {
        this.getAccessToken();
    },
    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token');
        },
        logout() {
            const request = () => {
                return new Promise((resolve, reject) => {
                    resolve(API.post('/api/auth/logout'));
                });
            }

            AuthService.auth(request).then(data => {
                localStorage.removeItem('access_token');
                this.$store.state.updater += 1;

                this.$router.push({ name: 'user.login'})
            });
        }
    }
}
</script>
<style>
.menu {
    text-align:center;
}
</style>

<template>
    <div>
        <div class="w-25 m-auto">
            <input v-model="name" type="text" class="form-controll mt-3 mb-3 p-2" placeholder="name">
            <input v-model="family" type="text" class="form-controll mt-3 mb-3 p-2" placeholder="family">
            <input v-model="email" type="email" class="form-control mb-3" placeholder="email">
            <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
            <input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="confirm password">
            <input @click.prevent="store" type="submit" class="btn btn-primary">
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Registration',
    data() {
        return {
            name: '',
            family: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        store() {
            axios.post('/api/users', {
                name: this.name,
                family: this.family,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(res => {
                console.log(res);
            })
        }
    }
}
</script>

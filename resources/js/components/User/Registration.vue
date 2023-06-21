<template>
    <div>
        <div class="w-25 m-auto">
            <div class="alert alert-danger mt-2" role="alert" v-for="message in regResult.failed.messages">
                {{ message }}
            </div>
            <div class="alert alert-success mt-2" role="alert" v-if="regResult.success.visible">
                {{ regResult.success.message }}
            </div>
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
            password_confirmation: '',
            regResult: {
                failed: {
                    messages: []
                },
                success: {
                    message: 'You have successfully registered',
                    visible: false,
                }
            }
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
                this.regResult.failed.messages = [];
                this.regResult.success.visible = true;
                console.log(res);
            }).catch(error => {
                if (error.response.status === 422) {

                    this.regResult.failed.messages = [];
                    for (let item in error.response.data.errors) {
                        this.regResult.failed.messages.push(error.response.data.errors[item][0]);
                    }
                }
            });
        }
    }
}
</script>

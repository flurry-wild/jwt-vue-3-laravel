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
                if (res.status === 200) {
                    this.secretData = res.data;
                }
            })
        }
    }
}
</script>

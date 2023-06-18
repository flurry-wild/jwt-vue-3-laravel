<template>
    <div class="menu">
        <router-link :to="{ name: 'pages.index' }" class="p-2">Test page</router-link>
        <router-link :to="{ name: 'user.login' }" class="p-2">Login</router-link>
        <router-link :to="{ name: 'user.registration' }" class="p-2">Registration</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: "Index"
}
</script>
<style>
.menu {
    text-align:center;
}
</style>

<template>
    <div id="app">
        <NavBar />
        <router-view />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
    name: 'app',
    components: { NavBar },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
}

#nav {
    padding-bottom: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

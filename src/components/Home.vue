<template>
    <div>
        HOME
        <div>
            board list:
            <div v-if="loading">
                loading...
            </div>
            <div v-else>
                <div v-for="b in boards" :key="b.id">
                    {{b}}
                </div>
            </div>

            <ul>
                <li>
                    <router-link to="/b/1">board click 1</router-link>
                </li>
                <li>
                    <router-link to="/b/2">board click 2</router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
import board from '../api';
export default{
    data() {
        return {
            loading: false,
            apiRes: '',
            error: '',
            boards: '',
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.loading = true;
            board.fetch()
                .then(res => {
                    this.boards = res.data;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};
</script>

<style lang="scss"></style>

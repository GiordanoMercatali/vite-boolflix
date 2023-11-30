<template lang="">
    <header>
        <label for="search">Search...</label>
        <input type="text" id="search" v-model="store.searchText"/>
        <button @click="$emit('doSearch')" class="btn btn-primary">Search</button>
    </header>
</template>

<script>
import {store} from '../store.js';
import axios from 'axios';

export default {
    emits:["doSearch"],
    data(){
        return{
            store,
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css" ;
</style>
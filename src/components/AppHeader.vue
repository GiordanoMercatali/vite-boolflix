<template lang="">
    <header>
        <div>
            <!-- <label for="search">Search...</label> -->
            <input type="text" id="search" v-model="store.searchText" placeholder="Type something here..." />
            <button @click="$emit('doSearch')" class=" ms-1 btn btn-primary">Search</button>
        </div>
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
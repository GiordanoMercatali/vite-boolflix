<template lang="">
    <header>
        <div class="ms-2">
            <img src="https://static-00.iconduck.com/assets.00/apps-netflix-icon-256x256-j76lapzs.png" alt="">
            <input type="text" id="search" v-model="store.searchText" placeholder="Type something here..." />
            <button @click="$emit('doSearch')" class=" ms-1 btn btn-danger">Search</button>
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

input{
    background-color: white;
    height: 38px;
}

header{
    background-color: black;
    height: 5vh;
    img{
        width: 64px;
        height: 64px;
        margin-right: 2rem;
    }
}
</style>
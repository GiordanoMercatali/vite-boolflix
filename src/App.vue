<template>
    <AppHeader @doSearch="search()"/>
    <AppMain />

</template>

<script>
import axios from 'axios';
import {store} from './store.js';
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data(){
    return{
      store,
    };
  },
  methods: {
    search(){
      axios.get(this.store.baseUrl + '/search/movie?api_key=' + this.store.apiKey + '&query=' + this.store.searchText)
      .then(resp => {
        this.store.moviesArray = resp.data.results
        // console.log(this.store.moviesArray)
      });

      axios.get(this.store.baseUrl + '/search/tv?api_key=' + this.store.apiKey + '&query=' + this.store.searchText)
      .then(resp => {
        this.store.tvshowsArray = resp.data.results
        console.log(this.store.tvshowsArray)
      });
    },
  }
}
</script>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
  
</style>
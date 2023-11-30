<template>
  <div>
    <AppHeader/>
    <!-- <AppHeader @do-search="search()"/> -->
  </div>
</template>

<script>
import axios from 'axios';
import {store} from './store.js';
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {AppHeader},
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
      });

      axios.get(this.store.baseUrl + '/search/tv?api_key=' + this.store.apiKey + '&query=' + this.store.searchText)
      .then(resp => {
        this.store.moviesArray = resp.data.results
      });
    },

    // getTVShows(){
    //   axios.get(this.store.baseUrl + '/search/tv?api_key=' + this.store.apiKey + '&query=' + this.store.searchText)
    //   .then(resp => {
    //     this.store.moviesArray = resp.data.results
    //   })
    // },
  }
}
</script>

<style lang="scss" scoped>
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
  
</style>
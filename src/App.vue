<template lang="">
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';
import {store} from './store.js';
// console.log(store);
export default {
  components: {AppHeader},
  data(){
    return{
      store,
    };
  },
  methods: {
    getMovies(){
      axios.get(this.store.moviesUrl + '?api_key=' + this.store.apiKey + '&query=' + this.store.searchText)
      .then(resp => {
        this.store.moviesArray = resp.data.results
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/* @use "./style/general.scss"
@import "@fontawesome/fontawesome-free/css/all.css" */
  
</style>
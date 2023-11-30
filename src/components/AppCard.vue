<template>
    <div class="mb-4 text-center">
        <img :src="poster" alt="" />
                <h3>{{ movie.title }}</h3>
                <h4>{{ movie.original_title }}</h4>
                <p>{{ movie.original_language }}</p>
                <p>{{ movie.vote_average }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    movie: Object,
  },

  methods: {
         getPoster(){
             poster = this.store.posterUrl + movie.poster_path;
             console.log(poster);
         }
    }

};
</script>

<style lang="scss" scoped>
    
</style>
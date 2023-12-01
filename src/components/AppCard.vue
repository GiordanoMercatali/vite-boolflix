<template>
    <div class="mb-4 text-center">
            <img v-if="movie.poster_path" :src="getPoster(movie.poster_path)" class="poster-image" />
            <img v-else src="https://i0.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1" class="poster-image">
                <h3>{{ "Title: " + movie.title }}</h3>
                <h4>{{ "OG Title: " + movie.original_title }}</h4>
                <p>{{ "Lang: "}}
                    <span v-if="hasFlag"><img class="lang-icon" :src="getLanguageFlag(movie.original_language)"></span>
                    <span v-else>{{ movie.original_language }}</span>
                </p>
                <p>{{ "Rating: " + movie.vote_average }}</p>
    </div>
</template>

<script>
import axios from 'axios';
import {store} from '../store';

export default {
  props: {
    movie: Object,
  },

  data(){
    return{
        store,
        flags: ["it", "en",]
    };
  },

  methods: {
        getPoster(posterPath){
             return this.store.posterUrl + posterPath;
        },
        
        getLanguageFlag(language){
                return new URL(`./images/${language}.png`, import.meta.url).href;
        },
    },

    computed:{
            hasFlag(){
                return this.flags.includes(this.movie.original_language);
            }
         }

};
</script>

<style lang="scss" scoped>

    .poster-image{
        width: 128px;
    }
    .lang-icon{
        width: 32px;
        position: relative;
        top: 10px;
        left: 0;
    }
</style>
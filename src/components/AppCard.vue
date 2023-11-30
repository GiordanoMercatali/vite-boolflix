<template>
    <div class="mb-4 text-center">
        <img :src="this.poster" alt="" />
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

export default {
  props: {
    movie: Object,
  },

  data(){
    return{
        flags: ["it", "en",]
    };
  },

  methods: {
         getPoster(){
             poster = this.store.posterUrl + movie.poster_path;
             console.log(poster);
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
    .lang-icon{
        width: 32px;
        position: relative;
        top: 10px;
        left: 0;
    }
</style>
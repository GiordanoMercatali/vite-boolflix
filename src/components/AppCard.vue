<template>
    <div class="m-4 text-center">
            <div class="hover-area">
                <div class="info-tab">
                    <h5>{{ movie.title }}</h5>
                    <p>{{ movie.overview.slice(0, 50) + "..." }}</p>
                    <p>
                    <span> <i v-for="star in getStars(movie.vote_average)" class="fa-solid fa-star"></i> </span>
                    <span> <i v-for="star in (5 - getStars(movie.vote_average))" class="fa-regular fa-star"></i> </span>
                    </p>
                </div>
                <img v-if="movie.poster_path" :src="getPoster(movie.poster_path)" class="poster-image" />
                <img v-else src="https://i0.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1" class="poster-image">
            </div>
            
                <h3 v-if="movie.title">{{ "Title: " + movie.title }}</h3>
                <h3 v-else>{{ "Title: " + movie.name }}</h3>
                <h4 v-if="movie.title">{{ "OG Title: " + movie.original_title }}</h4>
                <h4 v-else>{{ "OG Title: " + movie.original_name }}</h4>
                <p>{{ "Lang: "}}
                    <span v-if="hasFlag"><img class="lang-icon" :src="getLanguageFlag(movie.original_language)"></span>
                    <span v-else>{{ movie.original_language }}</span>
                </p>
                <p>{{ "Rating: "}}
                    <span> <i v-for="star in getStars(movie.vote_average)" class="fa-solid fa-star"></i> </span>
                    <span> <i v-for="star in (5 - getStars(movie.vote_average))" class="fa-regular fa-star"></i> </span>
                </p>
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

        getStars(rate){ //
            // console.log(Math.ceil(rate / 2));
            return Math.ceil(rate / 2);
        }
    },

    computed:{
            hasFlag(){
                return this.flags.includes(this.movie.original_language);
            }
         }

};
</script>

<style lang="scss" scoped>

    .hover-area{
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        &:hover{
            .info-tab{
                display: inline-block;
            }

            .poster-image{
                display: none;
            }
        }
    }

    .info-tab{
        background-color: rgba($color: #000000, $alpha: 1.0);
        width: 128px;
        height: 192px;
        display: none;
    }
    .poster-image{
        width: 128px;
        height: 192px;
        border: 2px solid white;
    }
    .lang-icon{
        width: 32px;
    }
</style>
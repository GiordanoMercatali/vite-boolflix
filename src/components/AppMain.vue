<template lang="">
    <main>
        <section>
            <div v-for="movie in store.moviesArray">
                <AppCard :movie="movie" />
                <!-- <h3>{{ movie.title }}</h3>
                <h4>{{ movie.original_title }}</h4>
                <p>{{ movie.original_country }}</p>
                <p>{{ movie.vote_average }}</p> -->
                
            </div>

            <div v-for="tvshow in store.tvshowsArray">
                <AppCard :tvshow="tvshow" />
            </div>

        </section>
    </main>
</template>

<script>
import {store} from "../store";
import AppCard from "./AppCard.vue";
export default {

    data(){
        return{
            store,
        };
    },

    components: {
    AppCard,
  },
    
}
</script>

<style lang="scss" scoped>
    
</style>
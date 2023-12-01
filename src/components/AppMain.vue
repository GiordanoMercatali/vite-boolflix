<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col" v-for="movie in store.moviesArray">
                    <AppCard :movie="movie" />
                </div>

                <div class="col" v-for="tvshow in store.tvshowsArray">
                    <AppCard :movie="tvshow" />
                </div>

            </div>
        </div>
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
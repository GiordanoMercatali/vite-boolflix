<template>
    <main>
        <div class="container pt-5">
            <div class="row">
                <div class="col-4" v-for="movie in store.moviesArray">
                    <AppCard :movie="movie" />
                </div>

                <div class="col-4" v-for="tvshow in store.tvshowsArray">
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

    main{
        height: 95vh;
        background-color: #141414;
        overflow-y: auto;
    }

    .container{
        [class^="col"]{
            // border: 1px solid red;
            border-radius: 20px;
        }
    }
    
</style>
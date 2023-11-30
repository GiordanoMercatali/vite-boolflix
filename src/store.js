import {reactive} from "vue";

export const store = reactive({
    moviesArray: [],
    tvshowsArray: [],
    baseUrl: "https://api.themoviedb.org/3",
    apiKey: "c44e7b0f94cd367102fdc4d253608adf",
    // apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=c44e7b0f94cd367102fdc4d253608adf&query=",
    searchText: "",
});
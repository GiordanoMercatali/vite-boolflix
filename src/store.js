import {reactive} from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/tv?api_key=c44e7b0f94cd367102fdc4d253608adf",
    // apiUrl: "https://api.themoviedb.org/3/search/tv?api_key=c44e7b0f94cd367102fdc4d253608adf&query=",
    searchText: "",
});
import axios from "axios";

export default {
    // get books by title
    getBook: function (query) {
        return axios.get("/books", { params: { q: query } })
    }
}


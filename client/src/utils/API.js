import axios from "axios";

export default {
    // get books by title
    getBook: function (query) {
        return axios.get("/api/books", { params: { q: query } })
    }
}


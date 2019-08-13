import axios from "axios";

export default {
    // get books by title
    getBook: function (title) {
        return axios.get("/api/books")
    }
}


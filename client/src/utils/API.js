import axios from "axios";

export default {
    // get books by title
    getBook: function (title) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
    }
}
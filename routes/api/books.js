const router = require("express").Router();
const booksController = require("../../controllers");

// "/api/books"
router.route("/")
    .get().post()

router.route("/:id")
    .get()
    .put()
    .delete()

module.exports = router;
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


// https://www.googleapis.com/books/v1/volumes?q=" + title
// API Routes

router.get("/bools", (req, res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
})

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

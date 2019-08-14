const path = require("path");
const axios = require("axios");
const router = require("express").Router();
const apiRoutes = require("./api");


// API Routes
router.use("/api", apiRoutes);

router.get("/books", (req, res) => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
        .then(({ data: { results } }) => res.json(results))
})

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

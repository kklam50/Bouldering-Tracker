const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/history", (req, res) => {
    res.render("history")
})

app.listen(8080, () => {
    console.log("Server started @ port 8080")
});
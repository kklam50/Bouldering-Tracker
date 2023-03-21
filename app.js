const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

const db = require("./util/dbConfig")

app.get("/", (req, res) => {
    res.render("index") 
})
 
app.get("/history", async function(req, res) {
    const results = await db.query("SELECT * FROM climbs");
    // console.log(results.json())
    for (var item in results) {
        console.log(results[item])
    }

    res.render("history", {results})
})

app.get("/newClimb", (req, res) => {
    res.render("newClimb")
})

app.listen(8080, () => {
    console.log("Server started @ port 8080")
});
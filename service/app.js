const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require("./dbConfig");
const mysql = require("mysql2");
  
const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/climb/:id", async function (req, res) {
    const climbID = req.params.id;
    const results = await db.query("SELECT * FROM climbs WHERE climbID = " + mysql.escape(climbID));
    res.json(results);
})

// posting new climb to db
app.post("/add", async function (req, res) {
    const climbInfo = req.body;

    console.log(climbInfo);

    // var climbDate = climbInfo.climbDate.substring(5, 7) + "/" + climbInfo.climbDate.substring(8, 10) + "/" + climbInfo.climbDate.substring(0, 4);

    // const query = "INSERT INTO climbs (climbDifficulty, climbDate, climbLocation, climbDescription)"
    //     + "VALUES ("
    //     + "\"" + climbInfo.climbDifficulty + "\", "
    //     + "\"" + climbDate + "\", "
    //     + "\"" + climbInfo.climbLocation + "\", "
    //     + "\"" + climbInfo.climbDescription + "\""
    //     + ")";

    // db.query(query);
    res.redirect("http://localhost:8080/");
})

// probably getting highest v-grade or something idk
app.get("/home", async function (req, res) {
    const results = await db.query("SELECT * FROM climbs ORDER BY climbDate DESC");
    res.json(results);
})

// grabbing all info, doing data transformation for trends 
app.get("/progress", async function (req, res) {
    const results = await db.query("SELECT * FROM climbs ORDER BY climbGrade DESC");
    res.json(results);
})
  
app.listen(PORT, () => console.log(`Hello world app listening on port http://localhost:3000/ !`));
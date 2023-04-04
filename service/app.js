const express = require('express');

const db = require("./dbConfig");
const mysql = require("mysql2");
  
const app = express();
const PORT = 3000;

app.get("/climb/:id", async function (req, res) {
    const climbID = req.params.id;
    res.send("ClimbID: " + climbID);
})

// posting new climb to db
app.post("/add", async function (req, res) {
    
})

// getting all climbs; probably for home page or something
app.get("/history", async function (req, res) {
    const results = await db.query("SELECT * FROM climbs");
    res.json(results);
})

// probably getting highest v-grade or something idk
app.get("/home", async function (req, res) {
    
})

// grabbing all info, doing data transformation for trends 
app.get("/progress", async function (req, res) {
    
})
  
app.listen(PORT, () => console.log(`Hello world app listening on port http://localhost:3000/ !`));
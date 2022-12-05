const express = require("express");
const app = express();
const port = 3010;

app.get("/", (req, res) => {
    res
        .status(200)
        .send("Welcome to my website using Express.js !!");
});

app.get("/about", (req, res) => {
    res.send("Welcome to About Page !!");
});

app.listen(port, () => {
    console.log(`Listening to the port : ${port}`);
});
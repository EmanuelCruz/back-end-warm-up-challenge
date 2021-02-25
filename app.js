const express = require("express");
const app = express();

const db = require("./models");
db.sequelize.sync();

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("servidor arrancado");
});

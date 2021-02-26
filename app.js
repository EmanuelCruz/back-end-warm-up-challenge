const express = require("express");
const app = express();
const apiRouter = require("./routes/api");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});

const controller = require("./controllers/index");
const run = async () => {
    const post1 = await controller.createPost({
        title: "post1",
        content: "content1",
        image: "image1.jpg",
        creationDate: "2020-07-01",
        category: "Cine",
    });
    const post2 = await controller.createPost({
        title: "post2",
        content: "content2",
        image: "image2.jpg",
        creationDate: "2020-01-01",
        category: "Comida",
    });

    console.log("Datos ingresados");
};

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("servidor arrancado");
});

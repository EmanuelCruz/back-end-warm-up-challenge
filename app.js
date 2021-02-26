const express = require("express");
const app = express();
const apiRouter = require("./routes/api");

const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
});

const controller = require("./controllers/index");
const run = async () => {
    const category1 = await controller.createCategory({
        name: "Informática",
    });

    const category2 = await controller.createCategory({
        name: "Cocina",
    });

    const category3 = await controller.createCategory({
        name: "Deportes",
    });

    const category4 = await controller.createCategory({
        name: "Cine",
    });

    // const post1 = await controller.createPost(1, {
    //     title: "Title post 1",
    //     content: "Content post1",
    //     image: "imagenpost1.jpg",
    //     creationDate: "2020-10-01",
    // });

    // const post2 = await controller.createPost(category1.id, {
    //     title: "Title post 2",
    //     content: "Content post2",
    //     image: "imagenpost2.jpg",
    //     creationDate: "2020-10-01",
    // });

    console.log("Datos ingresados");
};

app.listen(3000, () => {
    console.log("servidor arrancado");
});

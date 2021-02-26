const db = require("../models");
const Category = db.categories;
const Post = db.posts;

exports.createCategory = (category) => {
    return Category.create({
        name: category.name,
    })
        .then((category) => {
            console.log(
                ">> Created category: " + JSON.stringify(category, null, 4)
            );
            return category;
        })
        .catch((err) => {
            console.log(">> Error while creating category: ", err);
        });
};

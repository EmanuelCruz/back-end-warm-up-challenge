const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require("./post.js")(sequelize, Sequelize);
db.categories = require("./category.js")(sequelize, Sequelize);

db.categories.hasMany(db.posts);
db.posts.belongsTo(db.categories, {
    foreignKey: "categoryId",
    as: "category",
});

module.exports = db;

const { type } = require("os");

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "category",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );

    return Category;
};

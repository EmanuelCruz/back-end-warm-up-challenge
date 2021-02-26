module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        "post",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
            },
            content: {
                type: DataTypes.TEXT,
            },
            image: {
                type: DataTypes.STRING,
            },
            creationDate: {
                type: DataTypes.DATE,
            },
            category: {
                type: DataTypes.STRING,
            },
        },
        {
            timestamps: false,
        }
    );

    return Post;
};

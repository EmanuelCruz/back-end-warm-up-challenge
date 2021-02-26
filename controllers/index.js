const db = require("../models");
const Post = db.posts;

exports.createPost = (post) => {
    return Post.create({
        title: post.title,
        content: post.content,
        image: post.image,
        creationDate: post.creationDate,
        category: post.category,
    })
        .then((post) => {
            console.log(">> Created post: " + JSON.stringify(post, null, 4));
            return post;
        })
        .catch((err) => {
            console.log(">> Error while creating post: ", err);
        });
};

exports.getAllPost = async (req, res) => {
    const posts = await Post.findAll({
        attributes: [
            "id",
            "title",
            "content",
            "image",
            "creationDate",
            "category",
        ],
        order: [["creationDate", "DESC"]],
    });
    res.json(posts);
};

exports.getOnePost = async (req, res) => {
    const posts = await Post.findAll({
        where: { id: req.params.postId },
    });
    res.json(posts);
};

exports.postOnePost = async (req, res) => {
    const post = await Post.create(req.body);
    res.json(post);
};

exports.patchOnePost = async (req, res) => {
    await Post.update(req.body, {
        where: { id: req.params.postId },
    });
    res.json({ sucess: "Successful Update" });
};

exports.deleteOnePost = async (req, res) => {
    await Post.destroy({
        where: { id: req.params.postId },
    });
    res.json({ sucess: "Successful Delete" });
};

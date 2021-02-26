const router = require("express").Router();
const controller = require("../../controllers/index");

router.get("/", controller.getAllPost);
router.get("/:postId", controller.getOnePost);
router.post("/", controller.postOnePost);
router.patch("/:postId", controller.patchOnePost);
router.delete("/:postId", controller.deleteOnePost);

module.exports = router;

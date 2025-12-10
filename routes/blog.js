const express = require("express");
const router = express.Router();

// import controller

const {createComment} = require("../controllers/comment_Controller")
const {createPost} = require("../controllers/post_Controller")
const {getAllPost} = require("../controllers/post_Controller")
const {likePost, unlikePost} = require("../controllers/like_Controller")



// mapping create

router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/post", getAllPost);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

// export
module.exports = router;
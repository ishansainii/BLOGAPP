const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try{
        // data laao
        const {title, body} = req.body;
        const post = new Post({
            title, body
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost
        })
    }
    catch(err){
        return res.status(400).json({
            error: "error while creating post"
        })
    }
};

exports.getAllPost = async (req,res) => {
    try{
        const posts = await Post.find();
        res.json({
            posts : posts
        })
    }
    catch(error){
        return res.status(400).json({
            error: "Error while fetching posts"
        })
    }
}
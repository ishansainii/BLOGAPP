const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//buisness logic


exports.createComment = async (req, res) => {
    try{
        //fetch data from req body
        const {post, user, body} = req.body;
        // create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save the new comment
        const savedComment = await comment.save();

        // find the post by id and add rhe new comment to its comment arra
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}}, {new:true})
                            .populate("comments")
                            .exec();

        res.json({
            post: updatedPost,
        });
    }
    catch (error){
        console.log(error)
        return res.status(400).json({
            error: "Error while creating comment",
        })
    }
}


const Post = require("../models/postModel");
const Like = require("../models/likeModel");

//buisness logic


exports.likePost = async (req, res) => {
    try{
        //fetch data from req body
        const {post, user} = req.body;
        // create a comment object
        const like = new Like({
            post,user
        });

        //save the new comment
        const savedLike = await like.save();

        // find the post by id and add rhe new comment to its comment arra
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes: savedLike._id}}, {new:true})
                            .populate("likes")
                            .exec();

        res.json({
            post: updatedPost,
        });
    }
    catch (error){
        console.log(error)
        return res.status(400).json({
            error: "Error while Liking",
        })
    }
}


exports.unlikePost = async (req, res) => {
    try{
        //fetch data from req body
        const {post, like} = req.body; 
    

        // find the post by id and delete
        const deletedLike = await Like.findByIdAndDelete({post:post, _id:like})
        const updatedPost = await Like.findByIdAndUpdate(post, {$pull: {likes:deletedLike._id}}, {new:true});

        
        res.json({
            post: updatedPost,
            deleted_like: deletedLike
        });
    }
    catch (error){
        console.log(error)
        return res.status(400).json({
            error: "Error while unLiking",
        })
    }
}
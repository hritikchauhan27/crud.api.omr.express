//counting like api function an user adding comment api function

import { Comments, Likes } from "../modules/user.model";

const createComment = async(req:any, res:any) => {
    const details = req.body;
    console.log(details);
    const id = req.body.comment_id;
    const likes = req.params.like;
    try{
        if(likes != null){ 
            const update = await Likes.increment('totallikes', {where: {comment_id:id}});
            console.log(update);
            res.status(200).json({status:"comment liked successfully"});
        }
       
        else{
            await Comments.create(details);
            res.status(200).json({status:"comment created successfully"});
        }
    }
    catch(err){
        res.status(500).json({status : "Server Error"});
    }
}

export {createComment};
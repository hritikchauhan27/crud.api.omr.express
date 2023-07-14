import { Comments, Photos } from "../modules/user.model";

const recent_comments = async(req:any,res:any) => {
    try{
        
        Comments.findAll({ order: [['id', 'DESC']]
          }).then((result:any) => {
              for (let i = 0; i < 3; i++) {
                console.log(`USER ID: ${result[i].user_id}`);
                console.log(`URL: ${result[i].contents}`);
              }
            })
            .catch((error:any) => {
                console.log(error);
            });
        res.status(200).json({status : "success"});
    }
    catch(err){
        res.status(500).json({status: "Server Error"});
    }
}

export {recent_comments};
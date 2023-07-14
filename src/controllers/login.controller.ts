import { User } from "../modules/user.model";
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

const loginUser = async(req: any, res: any)=> {
    const token = req.headers.authorization;
    console.log(token);
    try{
    if(!token){
        return res.status(401).json({status:"unauthorized user"});
    }
        const decodedToken = jwt.verify(token, SECRET_KEY);
        const userId = decodedToken.id;
        console.log(userId);
        const isUser = await User.findOne({where:{username:userId}});
        if(isUser!=null){
            console.log(isUser);
            res.status(200).json({status: "loggedIn Successfully"});
        }
        else{
            res.status(404).json({status: "not found"});
        }
    }
    catch(err){
        res.status(500).json({status: "Server Error"});
    }
}

export {loginUser};
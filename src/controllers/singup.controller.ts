// user sign-up and generating token api function

import { User } from "../modules/user.model";
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

const user_SignUp = async (req: any, res: any) => {
    const details = req.body;
    console.log(req.body);
    try{
        const user = await User.create(details);
        const token = jwt.sign({id:user.username},SECRET_KEY); //generating token to validate that during login
        res.status(200).json({status:"SignUp Success",token});
    }
    catch(err){
        res.status(500).json({status:"server error"});
    }
}

export {user_SignUp};
import express from "express";
// 
const UserRouter = express.Router();

UserRouter.get("/");
UserRouter.post("/signup");
UserRouter.post("/login");
UserRouter.post("/createpost");
UserRouter.post("/comment");
UserRouter.post("/deletecomment");
// router.post("/comment/:like");

export default UserRouter;
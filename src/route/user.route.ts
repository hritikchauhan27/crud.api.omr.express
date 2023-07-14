import express from "express";
import { user_SignUp } from "../controllers/singup.controller";
import { loginUser } from "../controllers/login.controller";
import { Post_photo } from "../controllers/createpost.controller";
import { createComment } from "../controllers/comment.controller";
import { delete_comment } from "../controllers/delete.controller";
import { likes_on_comments } from "../controllers/l.p.c.controller";
import { recent_comments } from "../controllers/recent.comment.controller";
const router = express.Router();

router.get("/");
router.post("/signup", user_SignUp);
router.get("/login", loginUser);
router.post("/post", Post_photo);
router.post("/comment", createComment);
router.post("/delete", delete_comment);
router.post("/comment/:like",createComment);
router.get("/like",likes_on_comments);
router.get("/recentComment",recent_comments);

export default router;
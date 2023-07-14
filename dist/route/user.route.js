"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const singup_controller_1 = require("../controllers/singup.controller");
const login_controller_1 = require("../controllers/login.controller");
const createpost_controller_1 = require("../controllers/createpost.controller");
const comment_controller_1 = require("../controllers/comment.controller");
const delete_controller_1 = require("../controllers/delete.controller");
const l_p_c_controller_1 = require("../controllers/l.p.c.controller");
const recent_comment_controller_1 = require("../controllers/recent.comment.controller");
const router = express_1.default.Router();
router.get("/");
router.post("/signup", singup_controller_1.user_SignUp);
router.get("/login", login_controller_1.loginUser);
router.post("/post", createpost_controller_1.Post_photo);
router.post("/comment", comment_controller_1.createComment);
router.post("/delete", delete_controller_1.delete_comment);
router.post("/comment/:like", comment_controller_1.createComment);
router.get("/like", l_p_c_controller_1.likes_on_comments);
router.get("/recentComment", recent_comment_controller_1.recent_comments);
exports.default = router;
//# sourceMappingURL=user.route.js.map
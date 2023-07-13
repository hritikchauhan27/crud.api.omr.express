"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 
const UserRouter = express_1.default.Router();
UserRouter.get("/");
UserRouter.post("/signup");
UserRouter.post("/login");
UserRouter.post("/createpost");
UserRouter.post("/comment");
UserRouter.post("/deletecomment");
// router.post("/comment/:like");
exports.default = UserRouter;
//# sourceMappingURL=user.route.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_SignUp = void 0;
const user_model_1 = require("../modules/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY;
const user_SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const details = req.body;
    console.log(req.body);
    try {
        const user = yield user_model_1.User.create(details);
        const token = jsonwebtoken_1.default.sign({ id: user.username }, SECRET_KEY);
        res.status(200).json({ status: "SignUp Success", token });
    }
    catch (err) {
        res.status(500).json({ status: "server error" });
    }
});
exports.user_SignUp = user_SignUp;
//# sourceMappingURL=singup.controller.js.map
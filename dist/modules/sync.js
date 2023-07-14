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
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.User.sync({ force: true });
    yield user_model_1.Photos.sync({ force: true });
    yield user_model_1.Comments.sync({ force: true });
    yield user_model_1.Likes.sync({ force: true });
    console.log('All models were synchronized successfully.');
}))();
//# sourceMappingURL=sync.js.map
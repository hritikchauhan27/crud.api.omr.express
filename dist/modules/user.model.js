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
exports.Likes = exports.Comments = exports.Photos = exports.User = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = require("../core/connection");
const User = connection_1.sqlize.define('users', {
    username: {
        type: sequelize_1.default.STRING
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    }
});
exports.User = User;
const Photos = connection_1.sqlize.define('photos', {
    url: {
        type: sequelize_1.default.STRING
    },
    user_id: {
        type: sequelize_1.default.INTEGER
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    }
});
exports.Photos = Photos;
const Comments = connection_1.sqlize.define('comments', {
    contents: {
        type: sequelize_1.default.STRING
    },
    user_id: {
        type: sequelize_1.default.INTEGER
    },
    photo_id: {
        type: sequelize_1.default.INTEGER
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    }
});
exports.Comments = Comments;
const Likes = connection_1.sqlize.define('likes', {
    comment_id: {
        type: sequelize_1.default.INTEGER
    },
    totallikes: {
        type: sequelize_1.default.INTEGER
    },
    createdAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        default: Date.now(),
    }
});
exports.Likes = Likes;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield User.sync({ alter: true });
    yield Photos.sync({ alter: true });
    yield Comments.sync({ alter: true });
    yield Likes.sync({ alter: true });
    console.log('All models were synchronized successfully.');
}))();
// // import Sequelize from "sequelize";
// // import { sqlize, dbconnection } from "../core/connection";
// const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
// class user extends Model { }
// class photos extends Model { }
// class comments extends Model { }
// class likes extends Model { }
// user.init({
//     username: {
//         type: DataTypes.STRING
//     },
//     createdAt: {
//         type: Sequelize.DATE,
//         default: Date.now()
//     },
//     updatedAt: {
//         type: Sequelize.DATE,
//         default: Date.now()
//     }
// },
// {
//     sequelize,
//     tableName: 'users'
// });
// // photos.init({
// //     url: {
// //         type: DataTypes.STRING
// //     },
// //     user_id: {
// //         type: DataTypes.INTEGER
// //     },
// //     createdAt: {
// //         type: Sequelize.DATE,
// //         default: Date.now()
// //     },
// //     updatedAt: {
// //         type: Sequelize.DATE,
// //         default: Date.now()
// //     }
// // },
// // {
// //     sequelize,
// //     tableName: 'photos'
// // });
// // comments.init({
// //     contents: {
// //         type: DataTypes.STRING
// //     },
// //     user_id: {
// //         type: DataTypes.INTEGER
// //     },
// //     photo_id: {
// //         type: DataTypes.INTEGER
// //     },
// //     createdAt: {
// //         type: Sequelize.DATE,
// //         default: Date.now()
// //     },
// //     updatedAt: {
// //         type: Sequelize.DATE,
// //         default: Date.now()
// //     }
// // },
// // {
// //     sequelize,
// //     tableName: 'comments'
// // });
// // likes.init({
// //     comment_id: {
// //         type: DataTypes.STRING
// //     },
// //     totallikes: {
// //         type: DataTypes.INTEGER
// //     },
// //     createdAt: {
// //         type: Sequelize.DATE,
// //         default: Date.now()
// //     },
// //     updatedAt: {
// //         type: Sequelize.DATE,
// //         default: Date.now()
// //     }
// // },
// // {
// //     sequelize,
// //     tableName: 'likes'
// // });
// user.sync({ force: true });
// // comments.sync({ force: true });     
// // photos.sync({ force:  true });
// // likes.sync({ force: true });
// export { user };
//# sourceMappingURL=user.model.js.map
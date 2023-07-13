// import Sequelize from "sequelize";
// import { sqlize, dbconnection } from "../core/connection";

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
import { postgres } from "../core/connection";


export class user extends Model { }
class photos extends Model { }
class comments extends Model { }
class likes extends Model { }

user.init({
    username: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now()
    }
},
{
    sequelize: postgres,
    tableName: 'users'
});

// photos.init({
//     url: {
//         type: DataTypes.STRING
//     },
//     user_id: {
//         type: DataTypes.INTEGER
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
//     tableName: 'photos'
// });

// comments.init({
//     contents: {
//         type: DataTypes.STRING
//     },
//     user_id: {
//         type: DataTypes.INTEGER
//     },
//     photo_id: {
//         type: DataTypes.INTEGER
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
//     tableName: 'comments'
// });

// likes.init({
//     comment_id: {
//         type: DataTypes.STRING
//     },
//     totallikes: {
//         type: DataTypes.INTEGER
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
//     tableName: 'likes'
// });

// user.sync({ force: true });
// comments.sync({ force: true });     
// photos.sync({ force:  true });
// likes.sync({ force: true });
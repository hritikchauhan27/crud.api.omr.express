import Sequelize from "sequelize";
import { sqlize, dbconnection } from "../core/connection";

const User = sqlize.define('users', {
    username: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now(),
       
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now(),
       
    }
});

const Photos = sqlize.define('photos', {
    url: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now(),
       
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now(),
       
    }
});

const Comments = sqlize.define('comments', {
    contents: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    photo_id: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now(),
        
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now(),
        
    }
});

const Likes = sqlize.define('likes', {
    comment_id: {
        type: Sequelize.INTEGER
    },
    totallikes: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        default: Date.now(),
        
    },
    updatedAt: {
        type: Sequelize.DATE,
        default: Date.now(),
       
    }
});

(async () => {
    await User.sync({alter: true}); 
    await Photos.sync({alter: true});
    await Comments.sync({alter: true});
    await Likes.sync({alter: true});
    console.log('All models were synchronized successfully.');
  })();

export { User, Photos, Comments, Likes };

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
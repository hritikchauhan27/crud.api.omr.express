const Sequelize = require('sequelize');
import dotenv from 'dotenv';

dotenv.config();

const sqlize = new Sequelize(process.env.dbName, process.env.appName, process.env.PASSWORD, {
    hostName: process.env.hostName,
    dialect: process.env.dialect
});

const dbconnection = async () => {
    try {
        const msgonconnect = await sqlize.authenticate;
        console.log(await msgonconnect());
        console.log('Connection has been established successfully.');
    }
    catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}


export {sqlize,dbconnection};
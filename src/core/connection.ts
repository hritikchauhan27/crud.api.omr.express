// const Sequelize = require('sequelize');
import dotenv from 'dotenv';

dotenv.config();
import { Dialect, Sequelize } from 'sequelize';

let dialect: Dialect = <Dialect>process.env.dialect
export let postgres = new Sequelize(process.env.dbName, process.env.appName, process.env.PASSWORD, {
    host: process.env.hostName,
    dialect: dialect,

});

export const dbconnection = async () => {
    try {
        const msgonconnect = await postgres.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}
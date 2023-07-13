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
exports.dbconnection = exports.postgres = void 0;
// const Sequelize = require('sequelize');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
let dialect = process.env.dialect;
exports.postgres = new sequelize_1.Sequelize(process.env.dbName, process.env.appName, process.env.PASSWORD, {
    host: process.env.hostName,
    dialect: dialect,
});
const dbconnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const msgonconnect = yield exports.postgres.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (err) {
        console.error('Unable to connect to the database:', err);
    }
});
exports.dbconnection = dbconnection;
//# sourceMappingURL=connection.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require('sequelize');
exports.sequelize = new Sequelize('root', 'postgres', 'Appinventiv', {
    host: 'localhost',
    dialect: 'postgres'
});
//# sourceMappingURL=database.connection.js.map
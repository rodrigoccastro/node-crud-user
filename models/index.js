const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');

const configPath = path.resolve(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

const sequelize = new Sequelize(config);
const User = require('./userModel')(sequelize);

module.exports = { sequelize, User };

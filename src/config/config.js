const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const {
  DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: DB_DIALECT,
    logging: true,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
};

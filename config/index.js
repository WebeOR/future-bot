require('dotenv').config();

const { BOT_TOKEN, DB_HOST } = process.env;

const config = {
  BOT_TOKEN,
  DB_HOST,
};

module.exports = config;
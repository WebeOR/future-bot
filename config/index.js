const dotenv = require('dotenv');

let config = dotenv.config().parsed;

if (!config) {
  config = {
    BOT_TOKEN: process.env.BOT_TOKEN,
  }
}

module.exports = config;
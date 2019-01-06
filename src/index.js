const { PORT , DB_HOST } = require('../config');

const bot = require('./bot');
const server = require('./server');
const connection = require('./connect.js');

async function main () {
  try {
    await connection.create(DB_HOST);
    await server.start(PORT);
    bot.startPolling();
    console.log('Future Bot is running!');
  } catch (error) {
    console.error('Error on start', error);
  }
}

bot.catch( error => {
	console.log('Ooops', error);
});

main();
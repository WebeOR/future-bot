const bot = require('./bot');
const server = require('./server');
const connection = require('./connect.js');

async function main () {
  try {
    await connection.create();
    await server.create();
    bot.startPolling();
    console.log('Future Bot is running!');
  } catch (error) {
    console.log('Error on start', error);
  }
}

bot.catch( error => {
	console.log('Ooops', error);
});

main();
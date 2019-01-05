const bot = require('./bot');
const connection = require('./connect.js');

async function main () {
	await connection.create();
	bot.startPolling();
	console.log('Future Bot is running!');
}

bot.catch( error => {
	console.log('Ooops', error);
});

main();
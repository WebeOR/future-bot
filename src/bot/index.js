const { BOT_TOKEN } = require('../../config');

const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

const UserService = require('../services/User');

const keyboard = Markup.inlineKeyboard([
	Markup.urlButton('❤️', 'http://telegraf.js.org'),
	Markup.callbackButton('Delete', 'delete')
]);

const bot = new Telegraf(BOT_TOKEN);

bot.start(ctx => ctx.reply('Hello'));
bot.help(ctx => ctx.reply('Help message'));
bot.command('oldschool', ctx => ctx.reply('Hello'));
bot.command('modern', ({ reply }) => reply('Yo'));
bot.action('delete', ({ deleteMessage }) => deleteMessage());

// bot.use( ctx => console.log( 'editedMessage - ', ctx.editedMessage) );
bot.command('hello', async ({ message, reply }) => {
	const userID = message.from.id;
	const user = await UserService.get(userID);
	if (user) {
		reply(`Эй, ${ user.first_name }, я тебя знаю!`);
	} else {
		const newUser = await UserService.create(message);
		reply(`Ну вот, ${ newUser.first_name }, теперь я всё о тебе знаю!`);
	}
});

bot.on('message', ctx => {
	console.log(ctx.from.id);
	console.log(ctx.message);
	ctx.telegram.sendCopy(ctx.from.id, ctx.message);
});

module.exports = bot;
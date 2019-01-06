const { BOT_TOKEN } = require('../../config');

const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

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
bot.command('hello', ({ from , message }) => console.log );

bot.on('message', ctx => {
  console.log(ctx.from.id);
  console.log(ctx.message);
  ctx.telegram.sendCopy(ctx.from.id, ctx.message);
});

module.exports = bot;
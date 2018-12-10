const config = require('../config');

const Telegraf = require('telegraf');

const bot = new Telegraf(config.BOT_TOKEN)
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

module.exports = bot;
const { model } = require('mongoose');
const QuestSchema = require('./Schema');

const Quest = model('Quest', QuestSchema);

module.exports = Quest;

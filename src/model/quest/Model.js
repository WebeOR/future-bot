const { model } = require('mongoose');
const QuestSchema = require('./Schema.js');

const Quest = model('Quest', QuestSchema);

module.exports = Quest;

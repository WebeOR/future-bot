const { Schema } = require('mongoose');
const { BaseSchemaAbstract } = require('../base/Schema');

const QuestSchema = {
	active: {
		type: Boolean,
		required: true,
		default: false,
	},
};

const ContactSchema = new Schema({
	...QuestSchema,
	...BaseSchemaAbstract
});

module.exports = ContactSchema;

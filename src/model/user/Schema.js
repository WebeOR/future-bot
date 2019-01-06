const { Schema } = require('mongoose');
const BaseSchemaAbstract = require('../base/Schema');

const ModelSchema = {
  is_bot: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  language_code: {
    type: String,
    required: true,
  },
  chat_id: {
    type: String,
    required: true,
  },
  last_activity: {
    type: Date,
  },
	active: {
		type: Boolean,
		required: true,
		default: false,
	},
};

const ContactSchema = new Schema({
	...ModelSchema,
	...BaseSchemaAbstract
});

module.exports = ContactSchema;

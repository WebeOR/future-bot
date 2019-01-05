import { Schema } from 'mongoose';
import { BaseSchemaAbstract } from '../base/Schema';

const ModelSchema = {
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

import { Schema } from 'mongoose';

const BaseSchemaAbstract = {
  created_date: {
    default: Date.now,
    type: Date,
  },
  modified_date: {
    default: Date.now,
    type: Date,
  },
};

module.exports = BaseSchemaAbstract;
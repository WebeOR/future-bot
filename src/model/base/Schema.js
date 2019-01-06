const BaseSchemaAbstract = {
	created_date: {
		type: Date,
		default: Date.now,
	},
	modified_date: {
		type: Date,
		default: Date.now,
	},
};

module.exports = BaseSchemaAbstract;
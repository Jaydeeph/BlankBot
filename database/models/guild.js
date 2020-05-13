const { Schema, model } = require('mongoose');

const guildSchema = Schema({
	id: Schema.Types.ObjectId,
	prefix: {
		default: '?',
		type: String,
	},
});

module.exports = model('Guild', guildSchema);
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	user_id: Number,
	race: {
		default: 'Not Selected',
		type: String,
	},
	joined_discord: {
		default: Date.now(),
		type: Date,
	},
	gold: {
		default: 0,
		type: Number,
	},
	xp: {
		default: 0,
		type: Number,
	},
	level: {
		default: 0,
		type: Number,
	},
	last_wrote: {
		default: Date.now(),
		type: Date,
	},
	messages_wrote: {
		default: 0,
		type: Number,
	},
});

module.exports = model('User', userSchema);
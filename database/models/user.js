const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	user_id: Number,
	guild_id: Number,
	guild_name: String,
	race: {
		default: 'Not Selected',
		type: String,
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
	last_online: {
		default: Date.now,
		type: Date,
	},
	last_wrote: {
		default: Date.now,
		type: Date,
	},
});

module.exports = model('User', userSchema);
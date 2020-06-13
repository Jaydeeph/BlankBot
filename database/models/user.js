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
	given_hug: {
		default: 0,
		type: Number,
	},
	given_pat: {
		default: 0,
		type: Number,
	},
	given_highfive: {
		default: 0,
		type: Number,
	},
	given_poke: {
		default: 0,
		type: Number,
	},
	given_slap: {
		default: 0,
		type: Number,
	},
	given_lick: {
		default: 0,
		type: Number,
	},
	given_spank: {
		default: 0,
		type: Number,
	},
	given_kiss: {
		default: 0,
		type: Number,
	},
	recieved_hug: {
		default: 0,
		type: Number,
	},
	recieved_pat: {
		default: 0,
		type: Number,
	},
	recieved_highfive: {
		default: 0,
		type: Number,
	},
	recieved_poke: {
		default: 0,
		type: Number,
	},
	recieved_slap: {
		default: 0,
		type: Number,
	},
	recieved_lick: {
		default: 0,
		type: Number,
	},
	recieved_spank: {
		default: 0,
		type: Number,
	},
	recieved_kiss: {
		default: 0,
		type: Number,
	},
});

module.exports = model('User', userSchema);
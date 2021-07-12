const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
	user_id: Number,
	given_cake: {
		default: 0,
		type: Number,
	},
	given_cookie: {
		default: 0,
		type: Number,
	},
	given_kill: {
		default: 0,
		type: Number,
	},
	given_stab: {
		default: 0,
		type: Number,
	},
	given_punch: {
		default: 0,
		type: Number,
	},
	given_bully: {
		default: 0,
		type: Number,
	},
	given_bad: {
		default: 0,
		type: Number,
	},
	given_slap: {
		default: 0,
		type: Number,
	},
	given_glare: {
		default: 0,
		type: Number,
	},
	given_poke: {
		default: 0,
		type: Number,
	},
	given_tickle: {
		default: 0,
		type: Number,
	},
	given_highfive: {
		default: 0,
		type: Number,
	},
	given_pat: {
		default: 0,
		type: Number,
	},
	given_pullcheek: {
		default: 0,
		type: Number,
	},
	given_hug: {
		default: 0,
		type: Number,
	},
	given_unhug: {
		default: 0,
		type: Number,
	},
	given_holdhands: {
		default: 0,
		type: Number,
	},
	given_cuddle: {
		default: 0,
		type: Number,
	},
	given_nuzzle: {
		default: 0,
		type: Number,
	},
	given_bite: {
		default: 0,
		type: Number,
	},
	given_kiss: {
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
	recieved_cake: {
		default: 0,
		type: Number,
	},
	recieved_cookie: {
		default: 0,
		type: Number,
	},
	recieved_kill: {
		default: 0,
		type: Number,
	},
	recieved_stab: {
		default: 0,
		type: Number,
	},
	recieved_punch: {
		default: 0,
		type: Number,
	},
	recieved_bully: {
		default: 0,
		type: Number,
	},
	recieved_bad: {
		default: 0,
		type: Number,
	},
	recieved_slap: {
		default: 0,
		type: Number,
	},
	recieved_glare: {
		default: 0,
		type: Number,
	},
	recieved_poke: {
		default: 0,
		type: Number,
	},
	recieved_tickle: {
		default: 0,
		type: Number,
	},
	recieved_highfive: {
		default: 0,
		type: Number,
	},
	recieved_pat: {
		default: 0,
		type: Number,
	},
	recieved_pullcheek: {
		default: 0,
		type: Number,
	},
	recieved_hug: {
		default: 0,
		type: Number,
	},
	recieved_unhug: {
		default: 0,
		type: Number,
	},
	recieved_holdhands: {
		default: 0,
		type: Number,
	},
	recieved_cuddle: {
		default: 0,
		type: Number,
	},
	recieved_nuzzle: {
		default: 0,
		type: Number,
	},
	recieved_bite: {
		default: 0,
		type: Number,
	},
	recieved_kiss: {
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
	}
});

module.exports = model('Reaction', reactionSchema);
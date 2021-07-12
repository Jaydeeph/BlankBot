const Reactions = require('../database/models/reaction.js');

module.exports.cakeCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_cake += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_cake += 1;
		reaction.save();
	});
};

module.exports.cookieCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_cookie += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_cookie += 1;
		reaction.save();
	});
};

module.exports.killCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_kill += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_kill += 1;
		reaction.save();
	});
};

module.exports.stabCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_stab += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_stab += 1;
		reaction.save();
	});
};

module.exports.punchCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_punch += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_punch += 1;
		reaction.save();
	});
};

module.exports.bullyCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_bully += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_bully += 1;
		reaction.save();
	});
};

module.exports.slapCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_slap += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_slap += 1;
		reaction.save();
	});
};

module.exports.glareCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_glare += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_glare += 1;
		reaction.save();
	});
};

module.exports.pokeCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_poke += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_poke += 1;
		reaction.save();
	});
};

module.exports.tickleCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_tickle += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_tickle += 1;
		reaction.save();
	});
};

module.exports.highfiveCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_highfive += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_highfive += 1;
		reaction.save();
	});
};

module.exports.patCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_pat += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_pat += 1;
		reaction.save();
	});
};

module.exports.pullcheekCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_pullcheek += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_pullcheek += 1;
		reaction.save();
	});
};

module.exports.hugCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_hug += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_hug += 1;
		reaction.save();
	});
};

module.exports.unhugCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_unhug += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_unhug += 1;
		reaction.save();
	});
};

module.exports.holdhandsCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_holdhands += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_holdhands += 1;
		reaction.save();
	});
};

module.exports.cuddleCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_cuddle += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_cuddle += 1;
		reaction.save();
	});
};

module.exports.nuzzleCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_nuzle += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_nuzle += 1;
		reaction.save();
	});
};

module.exports.biteCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_bite += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_bite += 1;
		reaction.save();
	});
};

module.exports.kissCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_kiss += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_kiss += 1;
		reaction.save();
	});
};

module.exports.lickCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_lick += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_lick += 1;
		reaction.save();
	});
};

module.exports.spankCount = async (reactionFromUserId, reactionToUserId) => {
	Reactions.findOne({
		user_id: reactionFromUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_spank += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: reactionToUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_spank += 1;
		reaction.save();
	});
};
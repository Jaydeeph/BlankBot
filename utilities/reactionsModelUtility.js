const Reactions = require('../database/models/reaction.js');

module.exports.cakeCount = async (givenUserId, recievedUserId) => {
	Reactions.findOne({
		user_id: givenUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.given_cake += 1;
		reaction.save();
	});

	Reactions.findOne({
		user_id: recievedUserId,
	}, (error, reaction) => {
		if (error) console.log(error);

		reaction.recieved_cake += 1;
		reaction.save();
	});
};
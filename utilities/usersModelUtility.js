const Users = require('../database/models/user.js');

module.exports.createUserIfDoesNotExist = async (userId) => {
	const query = { user_id: userId };
	const update = { race: 'Use command [prefix]selectrace' };
	const options = { upsert: true };

	await Users.findOneAndUpdate(query, update, options);
};

module.exports.addGoldAndXP = async (userId) => {
	const gold = Math.floor(Math.random() * 5) + 1;
	const xp = 50;
	const query = { user_id: userId };
	const update = { $inc: { gold: gold, xp: xp } };
	const options = { upsert: true, new: true };

	await Users.findOneAndUpdate(query, update, options);
};

module.exports.checkUserLevel = async (userId, message) => {
	const query = { user_id: userId };
	const options = { upsert: true, new: true };
	const user = await Users.findOne(query);
	const newLevel = Math.floor(0.1 * Math.sqrt(user.xp));

	if (user.level < newLevel) {
		user.level = newLevel;
		await Users.findOneAndUpdate(query, { level: newLevel }, options);
		user.save();
		message.reply(`Aye, congrats you've just leveled up to level ${newLevel}!`);
	}
};

module.exports.addLastWrote = async (userId) => {
	const query = { user_id: userId };
	const update = { last_wrote: Date.now() };
	const options = { upsert: true, new: true };

	await Users.findOneAndUpdate(query, update, options);
};

module.exports.addMessagesWrote = async (userId) => {

	const query = { user_id: userId };
	const update = { $inc: { messages_wrote: 1 } };
	const options = { upsert: true, new: true };

	await Users.findOneAndUpdate(query, update, options);
};

module.exports.addRace = async (userId, race) => {
	const query = { user_id: userId };
	const update = { race: race };
	const options = { upsert: true, new: true };

	await Users.findOneAndUpdate(query, update, options);
};

module.exports.addJoinedDiscord = async (userId, joinedDiscord) => {
	const query = { user_id: userId };
	const update = { joined_discord: joinedDiscord };
	const options = { upsert: true, new: true };

	await Users.findOneAndUpdate(query, update, options);
};

module.exports.getUser = async (userId) => {
	const query = { user_id: userId };
	return await Users.findOne(query);
};

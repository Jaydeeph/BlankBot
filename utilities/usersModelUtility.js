const Users = require('../database/models/user.js');

module.exports.createUserIfDoesNotExist = async (message) => {
	Users.findOne({
		user_id: message.author.id,
	}, (error, user) => {
		if (error) console.log(error);

		if (!user) {
			const newUser = new Users({
				user_id: message.author.id,
			});

			newUser.save();
		}
	});
};

module.exports.addGoldAndXP = async (message) => {
	Users.findOne({
		user_id: message.author.id,
	}, (error, user) => {
		if (error) console.log(error);

		const gold = Math.floor(Math.random() * 5) + 1;
		const xp = 50;

		user.gold += gold;
		user.xp += xp;

		user.save();
	});
};

module.exports.checkUserLevel = async (message) => {
	Users.findOne({
		user_id: message.author.id,
	}, (error, user) => {
		if (error) console.log(error);

		const newLevel = Math.floor(0.1 * Math.sqrt(user.xp));

		if (user.level < newLevel) {
			user.level = newLevel;
			message.reply(`Aye, congrats you've just leveled up to level ${newLevel}!`);
		}

		user.save();
	});
};

module.exports.addLastWrote = async (message) => {
	Users.findOne({
		user_id: message.author.id,
	}, (error, user) => {
		if (error) console.log(error);

		user.last_wrote = Date.now();

		user.save();
	});
};

module.exports.addMessagesWrote = async (message) => {
	Users.findOne({
		user_id: message.author.id,
	}, (error, user) => {
		if (error) console.log(error);

		user.messages_wrote += 1;

		user.save();
	});
};

module.exports.getUser = async (userId) => {
	const user = await Users.findOne({
		user_id: userId,
	}, (error) => {
		if (error) console.log(error);
	});
	return user;
};

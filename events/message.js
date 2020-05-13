const { prefix } = require('../config.json');
const Users = require('../database/models/user.js');

module.exports = async (client, message) => {
	if(message.author.bot) return;
	// const member = await message.guild.members.fetch({ query: 'Sora 2.0', limit: 1 });
	// console.log(member);

	if (message.guild) {
		Users.findOne({
			user_id: message.author.id,
			guild_id: message.guild.id,
		}, (error, user) => {
			if (error) console.log(error);

			if (!user) {
				const newUser = new Users({
					user_id: message.author.id,
					guild_id: message.guild.id,
					guild_name: message.guild.name,
					gold: 1,
					xp: 1,
				});
				newUser.save();
			}
			else {
				const gold = Math.floor(Math.random() * 5) + 1;
				const xp = 3;

				user.gold += gold;
				user.xp += xp;

				const newLevel = Math.floor(0.1 * Math.sqrt(user.xp));
				if (user.level < newLevel) {
					user.level = newLevel;
					message.reply(`Aye, congrats you've just leveled up to level ${newLevel}!`);
				}

				user.last_wrote = Date.now;

				user.save();
			}
		});
	}

	if(message.content.indexOf(prefix) !== 0) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const firstCommand = args.shift().toLowerCase();
	const command = client.commands.get(firstCommand);

	if (!command) return;

	command.run(client, message, args);
};

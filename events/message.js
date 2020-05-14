const { prefix } = require('../config.json');
const userModel = require('../utilities/usersModelUtility.js');

module.exports = async (client, message) => {
	if(message.author.bot) return;
	// const member = await message.guild.members.fetch({ query: 'Sora 2.0', limit: 1 });
	// console.log(member);

	if (message.guild) {
		await userModel.createUserIfDoesNotExist(message);
		await userModel.addGoldAndXP(message);
		await userModel.checkUserLevel(message);
		await userModel.addLastWrote(message);
	}

	if(message.content.indexOf(prefix) !== 0) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const firstCommand = args.shift().toLowerCase();
	const command = client.commands.get(firstCommand);

	if (!command) return;

	command.run(client, message, args);
};


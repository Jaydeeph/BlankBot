const { prefix } = require('../config.json');
const userModel = require('../utilities/usersModelUtility.js');

module.exports = async (client, message) => {
	if(message.author.bot) return;

	// if (message.guild) {
	// 	await userModel.createUserIfDoesNotExist(message.author.id);
	// 	await userModel.addGoldAndXP(message.author.id);
	// 	await userModel.checkUserLevel(message.author.id, message);
	// 	await userModel.addLastWrote(message.author.id);
	// 	await userModel.addMessagesWrote(message.author.id);
	// }

	if(message.content.indexOf(prefix) !== 0) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const firstCommand = args.shift().toLowerCase();
	const command = client.commands.get(firstCommand);

	if (!command) return;

	command.run(client, message, args);
};


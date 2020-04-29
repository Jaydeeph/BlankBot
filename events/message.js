const { prefix } = require('../config.json');

module.exports = (client, message) => {
	if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const firstCommand = args.shift().toLowerCase();
	const command = client.commands.get(firstCommand);

	if (!command) return;

	command.run(client, message, args);
};
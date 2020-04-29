module.exports = (client) => {
	// This event will run if the bot starts, and logs in, successfully.
	console.log(`Blank has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity(`Serving ${client.guilds.size} servers`);
};
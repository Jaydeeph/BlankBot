module.exports = (client) => {
	console.log(`Blank has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	client.user.setActivity('What is life without games?');
};
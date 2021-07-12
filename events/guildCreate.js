module.exports = (client, guild) => {
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	guild.message.channel.send('Life is not a game of luck. If you wanna win, work hard.');
};
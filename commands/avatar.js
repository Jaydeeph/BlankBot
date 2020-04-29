const Discord = require('discord.js');

exports.run = (client, message, args) => {
	const avatarEmbed = Discord.RichEmbed;

	if (!message.mentions.users.size) {
		avatarEmbed.setColor('f65c78');
		avatarEmbed.setTitle(`${message.author.username}'s Avatar`);
		avatarEmbed.setDescription(`${message.author.displayAvatarURL}` + '?size=1024');
		avatarEmbed.setImage(`${message.author.displayAvatarURL}` + '?size=1024');
		avatarEmbed.setTimestamp();
	}

	message.mentions.users.map(user => {
		avatarEmbed.setColor('f65c78');
		avatarEmbed.setTitle(`${user.username}'s Avatar`);
		avatarEmbed.setDescription(`${user.displayAvatarURL}` + '?size=1024');
		avatarEmbed.setImage(`${user.displayAvatarURL}` + '?size=1024');
		avatarEmbed.setTimestamp();
	});

	message.channel.send(avatarEmbed);
};
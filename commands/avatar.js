const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	const avatarEmbed = new MessageEmbed();

	if (!message.mentions.users.size) {
		avatarEmbed.setColor('#f65c78');
		avatarEmbed.setTitle(`${message.author.username}'s Avatar`);
		avatarEmbed.setDescription(`[External Link](${message.author.displayAvatarURL({ format: 'png', size: 1024 })})`);
		avatarEmbed.setImage(`${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
		avatarEmbed.setTimestamp();
	}

	message.mentions.users.map(user => {
		avatarEmbed.setColor('f65c78');
		avatarEmbed.setTitle(`${user.username}'s Avatar`);
		avatarEmbed.setDescription(`[External Link](${user.displayAvatarURL({ format: 'png', size: 1024 })})`);
		avatarEmbed.setImage(`${user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
		avatarEmbed.setTimestamp();
	});

	message.channel.send(avatarEmbed);
};
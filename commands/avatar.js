const { MessageEmbed } = require('discord.js');
const utils = require('../utilities/utils.js');

exports.run = async (client, message, args) => {
	const avatarEmbed = new MessageEmbed();

	if (!message.mentions.users.size) {
		if (Object.keys(args).length == 0) {
			avatarEmbed.setColor('#f65c78');
			avatarEmbed.setTitle(`${message.author.username}'s Avatar`);
			avatarEmbed.setDescription(`[External Link](${message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 2048 })})`);
			avatarEmbed.setImage(`${message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 2048 })}`);
			avatarEmbed.setTimestamp();
		}
		else {
			// const member = message.guild.members.get(args[0]);
			// if(!member) {

			// }

			// avatarEmbed.setColor('#f65c78');
			// avatarEmbed.setTitle(`${member.author.username}'s Avatar`);
			// avatarEmbed.setDescription(`[External Link](${member.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 2048 })})`);
			// avatarEmbed.setImage(`${member.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 2048 })}`);
			// avatarEmbed.setTimestamp();
		}
	}

	message.mentions.users.map(user => {
		avatarEmbed.setColor('f65c78');
		avatarEmbed.setTitle(`${user.username}'s Avatar`);
		avatarEmbed.setDescription(`[External Link](${user.displayAvatarURL({ format: 'webp', dynamic: true, size: 2048 })})`);
		avatarEmbed.setImage(`${user.displayAvatarURL({ format: 'webp', dynamic: true, size: 2048 })}`);
		avatarEmbed.setTimestamp();
	});

	message.channel.send(avatarEmbed);
};
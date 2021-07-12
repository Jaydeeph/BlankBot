const { MessageEmbed } = require('discord.js');
const utils = require('../utilities/utils.js');

exports.run = async (client, message, args) => {
	const avatarEmbed = new MessageEmbed();
	const messageAuthor = message.author.username;

	if (!message.mentions.users.size) {
		if (Object.keys(args).length == 0) {
			avatarEmbed.setColor('#f65c78');
			avatarEmbed.setTitle(`${message.author.username}'s Avatar`);
			avatarEmbed.setDescription(`[External Link](${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })})`);
			avatarEmbed.setImage(`${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })}`);
			avatarEmbed.setTimestamp();
			avatarEmbed.setFooter(`Requested by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
		}
		else {
			const member = await utils.fetchUserByQuery(message, args[0]);
			const guildMemberInfo = member.first();
			const userInfo = guildMemberInfo.user;

			avatarEmbed.setColor('#f65c78');
			avatarEmbed.setTitle(`${userInfo.username}'s Avatar`);
			avatarEmbed.setDescription(`[External Link](${userInfo.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })})`);
			avatarEmbed.setImage(`${userInfo.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })}`);
			avatarEmbed.setTimestamp();
			avatarEmbed.setFooter(`Requested by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
		}
	}
	else {
		message.mentions.users.map(user => {
			avatarEmbed.setColor('f65c78');
			avatarEmbed.setTitle(`${user.username}'s Avatar`);
			avatarEmbed.setDescription(`[External Link](${user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })})`);
			avatarEmbed.setImage(`${user.displayAvatarURL({ format: 'png', dynamic: true, size: 2048 })}`);
			avatarEmbed.setTimestamp();
			avatarEmbed.setFooter(`Requested by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
		});
	}

	message.channel.send(avatarEmbed);
};
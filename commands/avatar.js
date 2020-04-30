const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	const avatarEmbed = new MessageEmbed();

	if (!message.mentions.users.size) {
		if (Object.keys(args).length == 0) {
			avatarEmbed.setColor('#f65c78');
			avatarEmbed.setTitle(`${message.author.username}'s Avatar`);
			avatarEmbed.setDescription(`[External Link](${message.author.displayAvatarURL({ format: 'png', size: 1024 })})`);
			avatarEmbed.setImage(`${message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
			avatarEmbed.setTimestamp();
		}
		// else {
		// 	const member = message.guild.members.get(args[0]);
		// 	if(!member) {return message.reply('Please mention a valid member of this server');}

		// 	avatarEmbed.setColor('#f65c78');
		// 	avatarEmbed.setTitle(`${member.author.username}'s Avatar`);
		// 	avatarEmbed.setDescription(`[External Link](${member.author.displayAvatarURL({ format: 'png', size: 1024 })})`);
		// 	avatarEmbed.setImage(`${member.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })}`);
		// 	avatarEmbed.setTimestamp();
		// }
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
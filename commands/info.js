const { MessageEmbed } = require('discord.js');

const utils = require('../utilities/utils.js');
const userModel = require('../utilities/usersModelUtility.js');

exports.run = async (client, message, args) => {
	let roles = [];
	let userId;
	let userTag;
	let username;
	let userAvatar;
	let userStatus;
	let userCreated;
	let userNickname;
	let customStatus;
	let customStatusCreated;
	let userJoinedTimestamp;

	const messageAuthor = message.author.username;
	const guildId = message.guild.id;

	const avatarEmbed = new MessageEmbed();

	if (!message.mentions.users.size) {
		// console.log(Object.keys(args).length);
		if (Object.keys(args).length == 0) {
			userId = message.author.id;
			username = message.author.username;
			userAvatar = message.author.displayAvatarURL({ format: 'webp', size: 512 });
		}
		else {
			const foundUserInfo = await utils.findUser(message, args[0]);
			const guildMemberInfo = foundUserInfo.first();

			// const guildInfo = guildMemberInfo.guild;
			const userInfo = guildMemberInfo.user;

			const rolesCollection = guildMemberInfo.roles.cache;

			let count = 0;
			for (const [key, value] of rolesCollection) {
				if (value.name === '@everyone') return;
				roles[count++] = `${value}`;
			}

			userId = userInfo.id;
			userTag = userInfo.tag;
			username = userInfo.username;
			userAvatar = userInfo.displayAvatarURL({ format: 'webp', size: 512 });
			userStatus = guildMemberInfo.presence.status;
			userCreated = userInfo.createdTimestamp;
			userNickname = guildMemberInfo.nickname;
			customStatus = guildMemberInfo.presence.activities[0].state;
			customStatusCreated = guildMemberInfo.presence.activities[0].createdTimestamp;
			userJoinedTimestamp = guildMemberInfo.joinedTimestamp;
		}
	}
	else {
		userId = message.mentions.users.first().id;
		username = message.mentions.users.first().username;
		userAvatar = message.mentions.users.first.displayAvatarURL({ format: 'webp', size: 512 });
	}

	const mongoUser = await userModel.getUserStatus(userId, guildId);

	const lastWrote = mongoUser.last_wrote.toGMTString();

	avatarEmbed.setColor('#f65c78');
	avatarEmbed.setTitle(`${userNickname}'s Stats`);
	avatarEmbed.setThumbnail(userAvatar);
	avatarEmbed.addField('User ID:', `${userId}`, true);
	avatarEmbed.addField('Race:', `${mongoUser.race}`, true);

	avatarEmbed.addField('Gold:', `${mongoUser.gold}`, true);
	avatarEmbed.addField('XP:', `${mongoUser.xp}`, true);
	avatarEmbed.addField('Level:', `${mongoUser.level}`, true);

	avatarEmbed.addField('Messages Wrote:', `${mongoUser.messages_wrote}`);
	avatarEmbed.addField('Last Wrote:', `${lastWrote}`, true);

	avatarEmbed.addField('Nickname:', `${userNickname}`, true);
	avatarEmbed.addField('Username & Tag:', `${userTag}`, true);
	avatarEmbed.addField('Status:', `${userStatus}`, true);
	avatarEmbed.addField('Roles:', `${roles}`);

	avatarEmbed.addField('Custom Status:', `${customStatus}`);
	avatarEmbed.addField('Custom Status Created:', `${new Date(customStatusCreated).toGMTString()}`);
	avatarEmbed.addField('Joined:', `${new Date(userJoinedTimestamp).toGMTString()}`);
	avatarEmbed.addField('Created:', `${new Date(userCreated).toGMTString()}`);

	avatarEmbed.addField('Emotes:', '(Given | Recieved)');
	avatarEmbed.addField('Hug:', `${mongoUser.given_hug} | ${mongoUser.recieved_hug}`, true);
	avatarEmbed.addField('Pats:', `${mongoUser.given_pat} | ${mongoUser.recieved_pat}`, true);
	avatarEmbed.addField('High Fives:', `${mongoUser.given_highfive} | ${mongoUser.recieved_highfive}`, true);
	avatarEmbed.addField('Pokes:', `${mongoUser.given_poke} | ${mongoUser.recieved_poke}`);
	avatarEmbed.addField('Slaps:', `${mongoUser.given_slap} | ${mongoUser.recieved_slap}`, true);
	avatarEmbed.addField('Kiss:', `${mongoUser.given_kiss} | ${mongoUser.recieved_kiss}`, true);
	avatarEmbed.addField('Licks:', `${mongoUser.given_lick} | ${mongoUser.recieved_lick}`, true);
	avatarEmbed.addField('Spanks:', `${mongoUser.given_spank} | ${mongoUser.recieved_spank}`);

	avatarEmbed.setFooter(`Requested by ${messageAuthor}`, userAvatar);

	avatarEmbed.setTimestamp();

	message.channel.send(avatarEmbed);
};
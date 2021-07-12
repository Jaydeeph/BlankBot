const { MessageEmbed } = require('discord.js');

const utils = require('../utilities/utils.js');
const userModel = require('../utilities/usersModelUtility.js');

let roles = [];
let userId = 000000000000000000;
let userTag = 'DeletedUser#0000';
let username = 'DeletedUser';
let userAvatar;
let userStatus = 'N/A';
let userCreated = 'N/A';
let userNickname = 'N/A';
let customStatus = 'N/A';
let customStatusCreated = 'N/A';
let userJoinedTimestamp;

exports.run = async (client, message, args) => {
	console.log('running this command');
	let requestUser;
	const messageAuthor = message.author.username;
	const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
	const avatarEmbed = new MessageEmbed();


	if (!message.mentions.users.size) {
		if (Object.keys(args).length == 0) {
			requestUser = message.author.username;
		}
		else {
			requestUser = args[0];
		}
	}
	else {
		requestUser = message.mentions.users.first().username;
	}

	const foundUserInfo = await utils.fetchUserByQuery(message, requestUser);
	await getAllUserInfo(foundUserInfo);

	const mongoUser = await userModel.getUser(userId);

	if (mongoUser.joined_discord != userCreated) {
		userModel.addJoinedDiscord(userId, userCreated);
	}

	avatarEmbed.setColor('#f65c78');
	avatarEmbed.setTitle(`${userNickname} AKA ${username}'s Stats`);
	avatarEmbed.setThumbnail(userAvatar);
	avatarEmbed.addField('User ID:', `${userId}`, true);
	avatarEmbed.addField('Race:', `${mongoUser.race}`, true);

	avatarEmbed.addField('Gold:', `${mongoUser.gold}`, true);
	avatarEmbed.addField('XP:', `${mongoUser.xp}`, true);
	avatarEmbed.addField('Level:', `${mongoUser.level}`, true);

	avatarEmbed.addField('Messages Wrote:', `${mongoUser.messages_wrote}`);
	avatarEmbed.addField('Last Wrote:', `${mongoUser.last_wrote.toGMTString()}`, true);

	avatarEmbed.addField('Nickname:', `${userNickname}`, true);
	avatarEmbed.addField('Username & Tag:', `${userTag}`, true);
	avatarEmbed.addField('Status:', `${userStatus}`, true);
	avatarEmbed.addField('Roles:', `${roles}`);

	avatarEmbed.addField('Custom Status:', `${customStatus}`);
	avatarEmbed.addField('Custom Status Created:', `${new Intl.DateTimeFormat('en-GB', dateOptions).format(customStatusCreated)}`);
	avatarEmbed.addField('Joined:', `${new Intl.DateTimeFormat('en-GB', dateOptions).format(userJoinedTimestamp)}`);
	avatarEmbed.addField('Created:', `${new Intl.DateTimeFormat('en-GB', dateOptions).format(userCreated)}`);

	avatarEmbed.addField('Reactions:', '(Given | Recieved)');
	avatarEmbed.addField('Hug:', `${mongoUser.given_hug} | ${mongoUser.recieved_hug}`, true);
	avatarEmbed.addField('Cuddle:', `${mongoUser.given_cuddle} | ${mongoUser.recieved_cuddle}`, true);
	avatarEmbed.addField('Pats:', `${mongoUser.given_pat} | ${mongoUser.recieved_pat}`, true);
	avatarEmbed.addField('High Fives:', `${mongoUser.given_highfive} | ${mongoUser.recieved_highfive}`, true);
	avatarEmbed.addField('Pokes:', `${mongoUser.given_poke} | ${mongoUser.recieved_poke}`, true);
	avatarEmbed.addField('Slaps:', `${mongoUser.given_slap} | ${mongoUser.recieved_slap}`, true);
	avatarEmbed.addField('Kiss:', `${mongoUser.given_kiss} | ${mongoUser.recieved_kiss}`, true);
	avatarEmbed.addField('Licks:', `${mongoUser.given_lick} | ${mongoUser.recieved_lick}`, true);
	avatarEmbed.addField('Spanks:', `${mongoUser.given_spank} | ${mongoUser.recieved_spank}`, true);

	avatarEmbed.setFooter(`Requested by ${messageAuthor}`, userAvatar);

	avatarEmbed.setTimestamp();

	message.channel.send(avatarEmbed);
};

// For some reason activities array is empty and presence is offline. Probably broken, just like the whole Discord programming team :^).
async function getAllUserInfo(foundUserInfo) {
	const guildMemberInfo = foundUserInfo.first();

	// const guildInfo = guildMemberInfo.guild;
	const userInfo = guildMemberInfo.user;
	const rolesCollection = guildMemberInfo.roles.cache;

	userId = userInfo.id;
	userTag = userInfo.tag;
	username = userInfo.username;
	userAvatar = userInfo.displayAvatarURL({ format: 'webp', size: 512 });
	userStatus = guildMemberInfo.presence.status;
	userCreated = userInfo.createdTimestamp;
	userNickname = guildMemberInfo.nickname;
	//customStatus = guildMemberInfo.presence.activities[0].state;
	//customStatusCreated = guildMemberInfo.presence.activities[0].createdTimestamp;
	userJoinedTimestamp = guildMemberInfo.joinedTimestamp;

	let count = 0;
	for (const [key, value] of rolesCollection) {
		if (value.name === '@everyone') return;
		roles[count++] = `${value}`;
	}
}
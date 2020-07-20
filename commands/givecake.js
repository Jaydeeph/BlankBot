const { MessageEmbed } = require('discord.js');
const utils = require('../utilities/utils.js');
const reactionsUtility = require('../utilities/reactionsModelUtility.js');

exports.run = async (client, message, args) => {
	const cakeEmbed = new MessageEmbed();

	const reactionFromUserId = message.author.id;
	const reactionFromUser = await utils.fetchUserById(message, reactionFromUserId);
	const reactionFromUserUsername = reactionFromUser.nickname;

	const reactionToUserId = await utils.getIdFromMention(args[0]);
	const reactionToUser = await utils.fetchUserById(message, reactionToUserId);
	const reactionToUserUsername = reactionToUser.nickname;

	const giphyType = 'gifs';
	const randomOffset = await utils.getRandomNumber(0, 101);
	const options = { 'q': 'cake', 'limit': '0', 'offset': randomOffset };
	const gif = await utils.giphySearch(giphyType, options);

	console.log(gif);

	cakeEmbed.setColor('f65c78');
	cakeEmbed.setDescription(`Oh ya, ${reactionFromUser} is giving a cake to ${reactionToUser}.`);
	cakeEmbed.setImage(gif);
	cakeEmbed.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }));
	cakeEmbed.setTimestamp();

	reactionsUtility.cakeCount(reactionFromUserUsername, reactionToUserUsername);
	message.channel.send(cakeEmbed);
};
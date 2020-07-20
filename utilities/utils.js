const GphApiClient = require('giphy-js-sdk-core');
const { giphy_api_key } = require('../config.json');
const giphyClient = GphApiClient(giphy_api_key);

module.exports.fetchUserByQuery = async (message, name) => {
	const member = await message.guild.members.fetch({ query: name, limit: 1 });
	return member;
};

module.exports.fetchUserById = async (message, id) => {
	const member = await message.guild.members.fetch(id);
	return member;
};

module.exports.getIdFromMention = async (mention) => {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return mention;
	}
};

module.exports.giphySearch = async (giphyType, options) => {
	return giphyClient.search(giphyType, options)
		.then((response) => {
			return response.data[0].images.original.url;
		})
		.catch((error) => {
			console.log(error);
		});
};

module.exports.giphyRandom = async (giphyType, options) => {
	return giphyClient.random(giphyType, options)
		.then((response) => {
			return response.data.images.original.gif_url;
		})
		.catch((error) => {
			console.log(error);
		});
};

module.exports.giphyId = async (gifId) => {
	return giphyClient.gifByID(gifId)
		.then((response) => {
			return response;
		})
		.catch((error) => {
			console.log(error);
		});
};

module.exports.getRandomNumber = async (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

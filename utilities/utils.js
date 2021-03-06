const GphApiClient = require('giphy-js-sdk-core');
const got = require('got');
const TorrentSearchApi = require('torrent-search-api');

const { giphy_api_key } = require('../config.json');
const { omdb_api } = require('../config.json');
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

module.exports.addArgsTogether = async (args) => {
	let sentence = '';

	args.forEach(element => {
		sentence += element + ' ';
	});

	return sentence;
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

module.exports.searchMovieByTitle = async (movieName) => {
    omdbApiRequest = 'https://www.omdbapi.com/?apikey=' + omdb_api + '&type=movie&s=' + movieName;

	return (async () => {
		try {
			const { body } = await got(omdbApiRequest);
			return JSON.parse(body).Search;
		} catch (error) {
			console.log(error.response.body);
		}
	})();
};

module.exports.findMovieByImdbId = async (ImdbId) => {
	omdbApiRequest = 'https://www.omdbapi.com/?apikey=' + omdb_api + '&type=movie&i=' + ImdbId;

	return (async () => {
		try {
			const { body } = await got(omdbApiRequest);
			return JSON.parse(body);
		} catch (error) {
			console.log(error.response.body);
		}
	})();
};

module.exports.searchMovieTorrent = async (movieName, queryLimit) => {
	TorrentSearchApi.disableAllProviders();
	TorrentSearchApi.enableProvider('1337x');
	TorrentSearchApi.enableProvider('KickassTorrents');
	TorrentSearchApi.enableProvider('Rarbg');

	const torrents = await TorrentSearchApi.search(movieName, 'Movies', queryLimit);
	return torrents;
};

module.exports.deleteMessage = async () => {
	//message.guild.channels.cache.get(message.channel.id).messages.delete(message);
    //message.guild.channels.cache.get(message.channel.id).messages.fetch('795982189531103232').then(mssge => mssge.delete());
};

module.exports.getRandomNumber = async (min, max) => {
	return Math.round(Math.random() * (max - min) + min);
};

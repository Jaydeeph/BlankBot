const { MessageEmbed } = require('discord.js');
const utils = require('../utilities/utils.js');
/* TODO:
1 - Check if API returned with data or not.
2 - Check if user inputs number for selecting torrent. 
3 - Check if user selected number is within torrent data range.
*/
exports.run = async (client, message, args) => {


    const queryLimit = args.shift();
    const movieName = await utils.addArgsTogether(args);

    const waitEmbed = new MessageEmbed();
    waitEmbed.setColor('#f65c78');
    waitEmbed.setTitle(`Searching For Torrents: ${movieName}`);
    waitEmbed.setDescription(`Please wait while we search for the torrent for you...`);
    waitEmbed.setTimestamp();

    const filter = m => m.author.id === message.author.id;
    const initialMessage = await message.channel.send(waitEmbed);


    let count = 1;
    const movieTorrentsList = await utils.searchMovieTorrent(movieName, queryLimit);

    const movieTorrentsEmbed = new MessageEmbed();
    movieTorrentsEmbed.setColor('#f65c78');
    movieTorrentsEmbed.setTitle(`Torrents For Movie: "${movieName}"`);
    movieTorrentsEmbed.setDescription(`Select a torrrent from 1-${movieTorrentsEmbed.length}`);
    if (movieTorrentsList.length == 0) {
        console.log(movieTorrentsList);
        movieTorrentsEmbed.addField(`No Search Results Found`, `Torrents API returned empty. This can happen sometimes. Please try again a few times. Otherwise there isn't any results.`);
    } else {
        movieTorrentsList.forEach(element => {
            movieTorrentsEmbed.addFields(
                { name: `${count++}) __${element.title}__`, value: `**Seeds:** ${element.seeds} - **Peers:** ${element.peers} - **Size:** ${element.size}` },
            );
        });
    }
    movieTorrentsEmbed.setTimestamp();
    initialMessage.edit(movieTorrentsEmbed);

    if (movieTorrentsList.count == 0) return;


    message.channel.awaitMessages(filter, {  max: 1, time: 60000, errors: ['time'] })
        .then(async userAnswer => {
            const index = parseInt(userAnswer.first().content.split(/ +/g)[0]);

            const movieTorrentMagnetEmbed = new MessageEmbed();
            movieTorrentMagnetEmbed.setColor('#f65c78');
            movieTorrentMagnetEmbed.setTitle(`Maget Link For Torrent ${movieTorrentsList[index].title}`);
            movieTorrentMagnetEmbed.setDescription(`${movieTorrentsList[index].magnet}`);
            movieTorrentMagnetEmbed.setTimestamp();

            initialMessage.edit(movieTorrentMagnetEmbed);
            userAnswer.delete();
        })
        .catch(collected => {
            console.log(collected);
            message.channel.send('1 Minute Timeout.');
        });
};
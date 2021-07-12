const { MessageEmbed } = require('discord.js');
const utils = require('../utilities/utils.js');

exports.run = async (client, message, args) => {

    const movieName = await utils.addArgsTogether(args);
    const moviesList = await utils.searchMovieByTitle(movieName);
    let movieListEmbeds = [];

    let count = 0;
    moviesList.forEach(movie => {
        const movieListEmbed = new MessageEmbed()
            .setColor('#f65c78')
            .setTitle(`${movie.Title}`)
            .setImage(`${movie.Poster}`)
            .addFields(
                { name: 'imdbID: ', value: movie.imdbID, inline: true },
                { name: 'Year: ', value: movie.Year, inline: true },
            )
            .setTimestamp()
            .setFooter(`Page ${count + 1}`);

        count++
        movieListEmbeds.push(movieListEmbed)
    });

    let page = 0
    message.channel.send(movieListEmbeds[page]).then(sentEmbed => {
        sentEmbed.react('836377426006507521').then(() => sentEmbed.react('836377426161434635')).then(() => sentEmbed.react('836377426413879356')).then(() => sentEmbed.react('836377426438914109'));
        
        const filter = (reaction, user) => reaction.emoji.id == '836377426006507521' || '836377426161434635' || '836377426413879356' || '836377426438914109';
        const collector = sentEmbed.createReactionCollector(filter, {time: 60000});
        collector.on('collect', async (reaction, user) => {
            if (user.id == '659564687611920414') return

            if (reaction.emoji.id == '836377426006507521') {

                const messageAuthor = message.author.username;
                const movieDetail = await utils.findMovieByImdbId(moviesList[page].imdbID);

                const movieEmbed = new MessageEmbed()
                .setColor('#f65c78')
                .setTitle(`${movieDetail.Title}`)
                .setURL(`https://www.imdb.com/title/${movieDetail.imdbID}`)
                .setDescription(`${movieDetail.Plot}`)
                .addFields(
                    { name: 'Duration', value: convertMinutesToHours(movieDetail.Runtime), inline: true },
                    { name: 'IMDB Rating', value: `${movieDetail.Ratings[0].Value}`, inline: true },
                    { name: 'Release Date', value: `${movieDetail.Released}`, inline: true },
                    { name: 'Genre', value: `${movieDetail.Genre}`, inline: true},
                    { name: 'Rated', value: `${movieDetail.Rated}`, inline: true },
                    { name: 'Actors', value: `${movieDetail.Actors}` },
                    { name: 'Awards', value: `${movieDetail.Awards}` },
                )
                .setImage(`${movieDetail.Poster}`)
                .setFooter(`Added by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
                .setTimestamp();

                message.delete();
                sentEmbed.reactions.removeAll();
                sentEmbed.edit(movieEmbed);
            }

            if (reaction.emoji.id == '836377426161434635') {
                if (page > 0) {
                    page--;
                    sentEmbed.edit(movieListEmbeds[page]);
                    reaction.users.remove(user.id);
                }
            }

            if (reaction.emoji.id == '836377426413879356') {
                if (page < moviesList.length - 1) {
                    page++;
                    sentEmbed.edit(movieListEmbeds[page]);
                    reaction.users.remove(user.id);
                }
            }

            if (reaction.emoji.id == '836377426438914109') {
                message.delete();
                sentEmbed.reactions.removeAll();
            }
        });
    });
};

function convertMinutesToHours(minutesText) {
    const minutes = minutesText.split(" ")[0];
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    return `${hour}h ${minute}m`;
}
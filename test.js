const { MessageEmbed } = require('discord.js');
const utils = require('../utilities/utils.js');

exports.run = async (client, message, args) => {

    const movieListEmbed = new MessageEmbed();
    const messageAuthor = message.author.username;
    const movieName = await utils.addArgsTogether(args);
    const moviesList = await utils.searchMovieByTitle(movieName);

    let count = 1;
    movieListEmbed.setColor('#f65c78');
    movieListEmbed.setTitle(`Movie results for: ${movieName}. Please select a number:`);
    moviesList.forEach(element => {
        movieListEmbed.addField(`${count++}) Title: ${element.Title}`, `Year: ${element.Year} - IMDB ID: ${element.imdbID}`);
    });
    movieListEmbed.setFooter(`Requested by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }));
    movieListEmbed.setTimestamp();

    let filter = m => m.author.id === message.author.id;
    message.channel.send(movieListEmbed)
        .then(sentMessage => {
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000,
                errors: ['time']
        })
        .then(async secondMessage => {
            
            const answer = secondMessage.first().content.split(/ +/g)[0];
            
            const movieDetail = await utils.findMovieByImdbId(moviesList[(answer - 1)].imdbID);
            const movieTitleSearch = convertMovieTitleWithDash(movieDetail.Title);

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
                
            message.delete()
            sentMessage.delete()
            secondMessage.delete()
            message.channel.send(movieEmbed);

        })
        .catch(collected => {
            console.print(collected)
            message.channel.send('1 Minute Timeout.');
        });
    });
};

function convertMovieTitleWithDash(movieTitle) {
    let movieTitleWithDashes = '';
    movieTitleChars = movieTitle.split(' ');
    
    for (let index = 0; index < movieTitleChars.length; index++) {
        if(index === (movieTitleChars.length - 1)) {
            movieTitleWithDashes += movieTitleChars[index];
        } else {
            movieTitleWithDashes += movieTitleChars[index] + '-';
        }
    }
    return movieTitleWithDashes;
}

function convertMinutesToHours(minutesText) {
    const minutes = minutesText.split(" ")[0];
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    return `${hour}h ${minute}m`;
}



























const { MessageEmbed } = require('discord.js');
const utils = require('../utilities/utils.js');

exports.run = async (client, message, args) => {

    const movieListEmbed = new MessageEmbed();
    const messageAuthor = message.author.username;
    const movieName = await utils.addArgsTogether(args);
    const moviesList = await utils.searchMovieByTitle(movieName);

    let count = 0;
    movieListEmbed.setColor('#f65c78');
    movieListEmbed.setTitle(`${moviesList[count].Title}`);
    movieListEmbed.setImage(`${moviesList[count].Poster}`);
    movieListEmbed.addFields(
        { name: 'imdbID: ', value: moviesList[count].imdbID, inline: true },
        { name: 'Year: ', value: moviesList[count].Year, inline: true },
    );
    movieListEmbed.setFooter(`Added by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }));
    movieListEmbed.setTimestamp();

    let sentEmbed = await message.channel.send(movieListEmbed);
    sentEmbed.react('✔️')
        .then(() => sentEmbed.react('⬅️'))
        .then(() => sentEmbed.react('➡️'))
        .then(() => sentEmbed.react('❌'));
    
    const filter = (reaction, user) => {
        return ['✔️', '⬅️', '➡️', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    

    sentEmbed.awaitReactions(filter, { max: 100, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();

            if (reaction.emoji.name == '⬅️') {
                if (count > 0) {
                    count--;
                    console.log(count);
                    message.channel.send(movieListEmbed);
                }
            }

            if (reaction.emoji.name == '➡️') {
                if (count < count.length) {
                    count++;
                    console.log(count);
                    message.channel.send(movieListEmbed);
                }
            }

            if (reaction.emoji.name == '❌') {
                sentEmbed.reactions.removeAll();
            }

        }).catch(() => {
            message.reply('No reaction after 60 seconds, operation canceled');
        });
};

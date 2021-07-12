const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const messageAuthor = message.author.username;

    const tvShowAndMoviesListEmbed = new MessageEmbed()
        .setColor('#f65c78')
        .setTitle('__**Movie & TV Shows Websites**__')
        .addField('123movies-official', 'https://123movies-official.site/')
        .addField('HiMovies', 'https://www.himovies.to/home')
        .addField('MoviesJoy', 'https://moviesjoy.to/home')
        .addField('MovieStars', 'https://moviestars.to/')
        .addField('LookMovie', 'https://lookmovie.io/')
        .addField('CMovies', 'https://www.cmovies.ac/')
        .addField('FMovies', 'https://www.fmovie.cc/')
        .addField('FMovies.Pink', 'https://fmovies.pink/site.html')
        .addField('LosMovies', 'https://losmovies.xyz/')
        .addField('StreamOnHD', 'https://streamonhd.me/')
        .addField('WatchSeries', 'https://www4.watchserieshd.tv')
        .addField('Series9', 'https://www.series9.ac/watch-series')
        .addField('Putlocker', 'https://putlockers.app/home')
        .setFooter(`Requested by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
        .setTimestamp();

    const movieListEmbed = new MessageEmbed()
        .setColor('#f65c78')
        .setTitle('__**Movie Websites**__')
        .addField('VexMovies', 'https://vexmovies.space/')
        .setFooter(`Requested by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
        .setTimestamp();

    const animeListEmbed = new MessageEmbed()
        .setColor('#f65c78')
        .setTitle('__**Anime Websites**__')
        .addField('Crunchyroll', 'https://www.crunchyroll.com/en-gb/videos/anime')
        .addField('Animepahe', 'https://animepahe.com/')
        .addField('9Anime', 'https://9anime.to/home')
        .addField('GoGoAnimeTV', 'https://www1.gogoanime.ai/')
        .addField('Masterani', 'https://www.masterani.one/')
        .addField('KissAnimeFree', 'https://kissanimefree.cc/trending-animes')
        .setFooter(`Requested by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
        .setTimestamp();

    message.channel.send(tvShowAndMoviesListEmbed)
    message.channel.send(movieListEmbed)
    message.channel.send(animeListEmbed)
};
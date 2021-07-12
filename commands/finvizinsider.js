const { PythonShell } = require('python-shell');
const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    const messageAuthor = message.author.username;

    const waitEmbed = new MessageEmbed()
        .setColor('#f65c78')
        .setTitle('Finviz High Value Insider Buys')
        .setDescription('Please wait...')
        .setFooter(`Added by ${messageAuthor}`, message.author.displayAvatarURL({ format: 'webp', dynamic: true, size: 512 }))
        .setTimestamp();

    const initialMessage = await message.channel.send(waitEmbed);

    let toShow = '';
    PythonShell.run('./python_scripts/finviz_insider_trading.py', null, function (err, results) {
        if (err) {
            console.log(err);
        }

        if(results) {
            toShow = '```' + results + '```';
            message.channel.send(toShow);
            console.log('Done');
        }
    });
};


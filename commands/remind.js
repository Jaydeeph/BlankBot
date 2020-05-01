const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	if (args.length < 4) {
		return message.channel.send('Incorrect arguments. Please use; !remind  @user 5 [s/m/h](second, minute, hour) you message goes here.');
	}
	if (!args[0].includes('@')) {
		return message.channel.send('You need to tag a user or yourself!');
	}
	if (time > 86400 || time > 1440 || time > 24) {
		return message.channel.send('Incorrect time. Please use time below 24 hours.');
	}

	const avatarEmbed = new MessageEmbed();
	const isInteger = value => parseInt(value) == value;
	const smh = args[2].toLowerCase();
	let time = args[1];
	let userMessage = '';
	const authorName = message.author.username;
	const reminderTagUser = args[0];
	const deleteMessage = args[args.length - 1];

	if (!isInteger(time)) {
		return message.channel.send('Incorrect time. Please use whole numbers.');
	}

	if (smh === 's') {
		time = Math.floor(time * 1000);
	}
	else if (smh === 'm') {
		time = Math.floor(time * 60000);
	}
	else if (smh === 'h') {
		time = Math.floor(time * 6e+6);
	}
	else {
		return message.channel.send('Incorrect time. Please use s/m/h (second/minute/hour)');
	}

	if (deleteMessage == 'delete') {
		for (let index = 3; index < args.length - 1; index++) {
			userMessage += args[index] + ' ';
		}
		message.delete().catch(console.log('Error while using !remind command.'));
	}
	else {
		for (let index = 3; index < args.length; index++) {
			userMessage += args[index] + ' ';
		}
	}

	avatarEmbed.setColor('f65c78');
	avatarEmbed.setTitle('**__Reminder:__**');
	avatarEmbed.setDescription(`${reminderTagUser} ${userMessage}`);
	avatarEmbed.setFooter(`Created by ${authorName}`);
	avatarEmbed.setTimestamp();

	setTimeout(function() {sendMessage(message, avatarEmbed);}, time);
};

function sendMessage(message, returnMessage) {
	message.channel.send(returnMessage);
}
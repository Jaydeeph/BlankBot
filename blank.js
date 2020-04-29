const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');
const Enmap = require('enmap');

const client = new Discord.Client();
client.commands = new Enmap();

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		// If the file is not a JS file, ignore it (thanks, Apple)
		if (!file.endsWith('.js')) return;
		// Load the event file itself
		const event = require(`./events/${file}`);
		// Get just the event name from the file name
		const eventName = file.split('.')[0];
		// super-secret recipe to call events with all their proper arguments *after* the `client` var.
		// without going into too many details, this means each event will be called with the client argument,
		// followed by its "normal" arguments, like message, member, etc etc.
		// This line is awesome by the way. Just sayin'.
		client.on(eventName, event.bind(null, client));
		delete require.cache[require.resolve(`./events/${file}`)];
	});
});

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		// Load the command file itself
		const props = require(`./commands/${file}`);
		// Get just the command name from the file name
		const commandName = file.split('.')[0];
		console.log(`Attempting to load command ${commandName}`);
		// Here we simply store the whole thing in the command Enmap. We're not running it right now.
		client.commands.set(commandName, props);
	});
});

client.login(token);
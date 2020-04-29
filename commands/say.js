exports.run = (client, message, args) => {
	const sayMessage = args.join(' ');
	message.delete().catch(console.log('Error while using !say command.'));
	message.channel.send(sayMessage);
};
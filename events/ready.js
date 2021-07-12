const mongoose = require('mongoose');

module.exports = async (client) => {
	// mongoose.connect('mongodb://localhost/blank', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

	client.user.setActivity('What is life without games?');
	console.log(`Blank has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
};
module.exports.findUser = async (message, name) => {
	const member = await message.guild.members.fetch({ query: name, limit: 1 });
	return member;
};
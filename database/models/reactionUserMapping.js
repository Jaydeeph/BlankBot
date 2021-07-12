const { Schema, model } = require('mongoose');

const reactionUserMappingSchema = new Schema({
	from_user_id: Number,
	to_user_id: Number,
	reaction: String,
});

module.exports = model('ReactionUserMapping', reactionUserMappingSchema);
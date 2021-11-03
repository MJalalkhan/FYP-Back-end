// Define schema

import mongoose from 'mongoose';
const { Schema } = mongoose;

var UserModelSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		lowercase: true,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

// Compile model from schema
export const userModel = mongoose.model('User', UserModelSchema);

import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminModelSchema = new Schema({
    name: {
		type: String,
		required: true
	},
      email: {
        type: String,
        // lowercase: true,
		required: true,
        unique: true,
        // sparse:true
    },
     password: {
        type: String,
        required: true
    }
});

export const adminModel = mongoose.model("Admins", adminModelSchema);


// Define schema

import mongoose from 'mongoose';
const { Schema } = mongoose;
const product = new Schema({
	productName: {
		type: String
	},
	productID: {
		type: String
	},
	myOrders: [

	],
	price: {
		type: String
	},
	discountPrice: {
		type: Number
	},
	stock: {
		type: String
	},
	productDescription: {
		type: String
	}
});

// Compile model from schema
export const cartModel = mongoose.model('CartProduct', product);

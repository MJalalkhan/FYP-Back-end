import mongoose from 'mongoose';
// import mongoosePaginate from 'mongoose-paginate'
// const { defaultMaxListeners } = require('nodemailer/lib/mailer');
// import {defaultMaxListeners} from 'nodemailer/lib/mailer'
const { Schema } = mongoose;

const product = new Schema({

    productName: {
        type: String
    },
    productID: {
        type: String
    },
    price:{
        type: String
    },
    discountPrice:{
        type: Number
    },
    stock: {
        type: String
    },
    productDescription: {
        type: String
    },
    shop:{
        type: Schema.Types.ObjectId,
        ref: 'Store'
    } 
});

// product.plugin(mongoosePaginate);

export const productsModel = mongoose.model("Product", product);
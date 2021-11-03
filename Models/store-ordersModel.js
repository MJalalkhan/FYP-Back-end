import mongoose from 'mongoose';
const { Schema } = mongoose;
// import mongoosePaginate from 'mongoose-paginate'

// const mongoosePaginate = require('mongoose-paginate');
// const { defaultMaxListeners } = require('nodemailer/lib/mailer');

export const storeOrder = new Schema({

    orderID: {
        type: String
    },
    date: {
         type: Date, default: Date.now
     },
    productlist: [{
        product: String,
        quantity: String,
        productTotal:String
    }
    ],
    bill:{
        type: String,

    },
    customer: {
        email: {type: String},
        name:  {type: String},
        address: {type: String},
        mobile: {type: String}
    } 
    ,
    status: {
        type: String,
        default: 'Pending'
    }
});

// storeOrder.plugin(mongoosePaginate);

// Store.methods.toJSON = function() {
//     var obj = this.toObject();
//     delete obj.password;
//     return obj;
//    }
// User.index({'$**': 'text'});

export const storeOrderModel = mongoose.model("StoreOrder", storeOrder);
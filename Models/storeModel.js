import mongoose from 'mongoose';
// import mongoosePaginate from 'mongoose-paginate'
const { Schema } = mongoose;
// import { productsModel } from './productModel';
// const product = require('./product.model');

const Store = new Schema({
   
    isActive: 
    {
        type: Boolean,
        default: false
    },
    storeName: {
        type: String
    },
    storeType: {
        type: String
    },
    storeLocation:{
        type: String
    },
    email: {
        type: String,
        unique: true,
        sparse:true
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        address: { type: String},
        city: {type: String},
        province: {type: String},
        country: {type: String}
    },
    cnic:{
        cnicNo:{type: String,unique: true},
        cnicName:{type: String}
    },
    bank:{
        bankName:{type: String},
        branchCode:{type: String},
        accountTitle:{type: String},
        accountNo:{type: String,unique:true},
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    orders:[{
        type: Schema.Types.ObjectId,
        ref: 'StoreOrder'
    }]


});

// // Store.plugin(mongoosePaginate);

// Store.methods.toJSON = function() {
//     var obj = this.toObject();
//     delete obj.password;
//     return obj;
//    }
// User.index({'$**': 'text'});

export const storeModel = mongoose.model("Store", Store);
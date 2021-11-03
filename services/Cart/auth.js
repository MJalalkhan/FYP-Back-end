// //admin
// import { create, findOne, findById, RemoveFromCart, UpdateItemCart, findAll } from './authDb';
// import { storeOrderModel } from '../../Models/store-ordersModel';
// import { storeModel } from '../../Models/storeModel';

// export const AddToCartAuth = async (final) => {
// 	// const item = await findOne( {productID:final.productID});
// 	// console.log('Cart Object', item);
// 	// if (item) {
// 	// 	return `Data Already Exist`;
// 	// }

// 	// const response = await create(final);
// 	// if(!response){
// 	// 	return ('Sucessfully Added');
// 	// }
	

// 	// return response;
// };

// //remove item based on email
// export const DeleteFromCartAuth = async (id) => {
// 	// const item = await findById({_id:id});
// 	// if (!item) {
// 	// 	return 'Item not found with this id';
// 	// }

// 	// const response = await RemoveFromCart({_id:id});
// 	// if (response) {
// 	// 	return 'Deleted Successfully....';
// 	// }
	
// 	// return response;
// };

// //update item name and password based on id
// export const UpdateCartAuth = async (id, productName, price) => {
// 	// const item = await findById(id);
// 	// console.log(item);
// 	// if (!item) {
// 	// 	return 'Item not found with this id';
// 	// }

// 	// const itemUpdateObj = {
// 	// 	productName:productName,
// 	// 	price:price
// 	// };
// 	// console.log('uppppppp', { _id: id }, itemUpdateObj);
// 	// const response = await UpdateItemCart({ _id: id }, itemUpdateObj);
// 	// console.log('Sucessfully Updated ');

// 	// return response;
// };

// //display all users in an array
// export const AllItemsDisplayAuth = async () => {
// 	// const item = await findAll();
// 	// console.log('All Users Displayed');
// 	// return item;
// };

// export const placeOrderAuth = async (final) => {
// // 	console.log('final',final);
// // 	const newOrder = new storeOrderModel(final);
// // 	await newOrder.save();
// // 	const id = newOrder._id;
// // 	console.log('new id',id);

// // 	await storeOrderModel.findOneAndUpdate(
// // 		{ _id: id },
// // 		{
// // 			$push: {
// // 				productlist	: { product: body.p_id, quantity: body.pquantity, productTotal: body.pquantity }
// // 			}
// // 		}
// // 	);

// // 	const store = await storeModel.findOne({ email: body.shopMail });
// // 	const result = store.orders.push(newOrder);
// // 	storeModel.save();
// // 	if (result) {
// // 		res.send('successfully Placed Order');
// // 	}
// };

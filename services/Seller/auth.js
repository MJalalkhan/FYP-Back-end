// import jwt from 'jsonwebtoken';
// import { create, findOne, findById, RemoveFromCart, UpdateItemCart, findAll } from './authDb';
// import bcrypt from 'bcrypt';
// import { storeOrderModel } from '../../Models/store-ordersModel';
// import { storeModel } from '../../Models/storeModel';
// // import { response } from 'express';

// //Signup
// // export const sellerSignupAuth = async (final) => {
// // 	console.log('seller Object', final);
// // 	const cnic = final.cnic.cnicNo;
// // 	const password = final.password;
// // 	const confirmPassword = final.confirmPassword;
// // 	console.log('password', password + 'confirmPass', confirmPassword);

// // 	const user = await findOne({ cnic });
// // 	if (user) {
// // 		return `Store already exist with this cnic ${cnic}`;
// // 	}
// // 	if (await bcrypt.compare(password, confirmPassword)) {
// // 		return 'Password didnot matched';
// // 	}

// // 	const response = await create(final);
// // 	console.log('Sucessfully registered');

// // 	return response;
// // };

// //Login
// export const sellerSignInAuth = async (email, password) => {
// 	const user = await findOne({ email: email });
// 	console.log(user);

// 	//Login with jst token
// 	if (!(user && (await bcrypt.compare(password, user.password)))) {
// 		// Create token
// 		return 'Email or Password is Incorrect';
// 	}
// 	const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
// 		expiresIn: '2h'
// 	});

// 	return { token: token };
// };

// //admin

// export const AddToCartAuth = async (productName, productID, price, discountPrice, stock, productDescription) => {
// 	const item = await findOne({ productID });
// 	console.log('Cart Object', item);
// 	if (item) {
// 		return `Data Already Exist`;
// 	}

// 	const cartObj = {
// 		productName,
// 		productID,
// 		price,
// 		discountPrice,
// 		stock,
// 		productDescription
// 	};

// 	const response = await create(cartObj);
// 	return 'Sucessfully Added';

// 	return response;
// };

// //remove item based on email
// export const DeleteFromCartAuth = async (id) => {
// 	const item = await findById(id);
// 	if (!item) {
// 		return 'Item not found with this id';
// 	}

// 	const response = await RemoveFromCart(id);
// 	if (item) {
// 		return 'Deleted Successfully';
// 	}
// 	console.log('Deleted ');
// 	return response;
// };

// //update item name and password based on id
// export const UpdateCartAuth = async (id, productName, price) => {
// 	const item = await findById(id);
// 	console.log(item);
// 	if (!item) {
// 		return 'Item not found with this id';
// 	}

// 	const itemUpdateObj = {
// 		productName: productName,
// 		price: price
// 	};
// 	console.log('uppppppp', { _id: id }, itemUpdateObj);
// 	const response = await UpdateItemCart({ _id: id }, itemUpdateObj);
// 	console.log('Sucessfully Updated ');

// 	return response;
// };

// //display all users in an array
// export const AllItemsDisplayAuth = async () => {
// 	const item = await findAll();
// 	console.log('All Users Displayed');
// 	return item;
// };

// export const placeOrderAuth = async (final) => {
// 	console.log('final  aaaaa', final);
// 	const newOrder = new storeOrderModel(final);
// 	await newOrder.save();
// 	const id = newOrder._id;
// 	console.log('new id', id);

// 	await storeOrderModel.findOneAndUpdate(
// 		{ _id: id },
// 		{
// 			$push: {
// 				productlist: { product: body.p_id, quantity: body.pquantity, productTotal: body.pquantity }
// 			}
// 		}
// 	);

// 	const store = await storeModel.findOne({ email: body.shopMail });
// 	const result = store.orders.push(newOrder);
// 	storeModel.save();
// 	if (result) {
// 		res.send('successfully Placed Order');
// 	}
// };

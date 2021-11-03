// import bcrypt from 'bcrypt';
// import {
// 	userSignupAuth,
// 	userSignInAuth,
// 	userUpdateAuth,
// 	userDeleteAuth,
// 	AllUsersDisplayAuth,
// 	singleUserDisplayAuth
// } from '../services/User/auth';
// import { adminSignInAuth, adminSignupAuth } from '../services/admin/auth';
// import {
// 	AddToCartAuth,
// 	DeleteFromCartAuth,
// 	UpdateCartAuth,
// 	AllItemsDisplayAuth,
// 	placeOrderAuth
// } from '../services/Cart/auth';
// import { sellerSignInAuth,sellerSignupAuth } from '../services/Seller/auth';

// export const signup = async (req, res) => {
// 	const { name, email, password, confirmPassword } = req.body; //destrcturing req.body
// 	const response = await userSignupAuth(name, email, password, confirmPassword);
// 	res.send(response);
// };

// export const signIn = async (req, res) => {
// 	const { email, password } = req.body; //destrcturing req.body
// 	const response = await userSignInAuth(email, password);
// 	res
// 		.cookie('access_token', response.token, {
// 			httpOnly: true,
// 			secure: process.env.NODE_ENV === 'production'
// 		})
// 		.send(response);
// };

// export const update = async (req, res) => {
// 	const { id } = req.params;
// 	const { name, password } = req.body; //destrcturing req.body'

// 	const response = await userUpdateAuth(id, name, password);
// 	res.send(response);
// };

// export const deleteUser = async (req, res) => {
// 	const { email } = req.body; //destrcturing req.body
// 	const response = await userDeleteAuth(email);
// 	res.send(response);
// };

// export const displayAllUsers = async (req, res) => {
// 	const { name, email } = req.body; //destrcturing req.body
// 	const response = await AllUsersDisplayAuth(name, email);
// 	res.send(response);
// };

// export const displaySingleUser = async (req, res) => {
// 	const { id } = req.params;
// 	const response = await singleUserDisplayAuth(id);
// 	res.send(response);
// };

// //admin
// export const signUpAdmin = async (req, res) => {
// 	const { name, email, password, confirmPassword } = req.body; //destrcturing req.body
// 	const response = await adminSignupAuth(name, email, password, confirmPassword);
// 	res.send(response);
// };

// export const signInAdmin = async (req, res) => {
// 	const { email, password } = req.body; //destrcturing req.body
// 	const response = await adminSignInAuth(email, password);
// 	res
// 		.cookie('access_token', response.token, {
// 			httpOnly: true,
// 			secure: process.env.NODE_ENV === 'production'
// 		})
// 		.send(response);
// };


// //CART
// export const AddToCart = async (req, res) => {
// 	const { productName, productID, price, discountPrice, stock, productDescription } = req.body; //destrcturing req.body
// 	const response = await AddToCartAuth(productName, productID, price, discountPrice, stock, productDescription);
// 	res.send(response);
// };

// export const DeleteFromCart = async (req, res) => {
// 	const { id } = req.params; //destrcturing req.body
// 	const response = await DeleteFromCartAuth(id);
// 	res.send(response);
// };

// export const UpdateCart = async (req, res) => {
// 	const { id } = req.params;
// 	const { productName, price } = req.body; //destrcturing req.body'

// 	const response = await UpdateCartAuth(id, productName, price);
// 	res.send(response);
// };

// export const displayAllItems = async (req, res) => {
// 	const { product } = req.body; //destrcturing req.body
// 	const response = await AllItemsDisplayAuth(product);
// 	res.send(response);
// };

// //======================Seller==========================
// export const sellerSignup = async (req, res) => {
// 	// const { name, email, password, confirmPassword } = req.body; //destrcturing req.body
// 	const body = req.body;
// 	// there must be a password in body
// 	// we follow these 2 steps

// 	const password = body.password;
// 	const saltRounds = 10;
// 	const hashPassword = await bcrypt.hash(password, saltRounds);

// 	const final = {
// 	  storeName: body.storename,
// 	  storeType: body.storeType,
// 	  storeLocation: body.storeLocation,
// 	  email: body.email,
// 	  password: hashPassword,
// 	  confirmPassword: body.confirmPassword,
// 	  mobile: body.mobile,

// 	address: {
// 	  address: body.address,
// 	  city: body.city,
// 	  province: body.province,
// 	  country: body.country,
// 	},
// 	cnic:{
// 	  cnicNo: body.cnicNo,
// 	  cnicName: body.cnicName
// 	},
// 	bank:{
// 	  bankName: body.bankName,
// 	  branchCode: body.branchCode,
// 	  accountTitle: body.accountTitle,
// 	  accountNo: body.accountNo,
// 	}

//   };


// 	const response = await sellerSignupAuth(final);
// 	res.send(response);
// };

// export const sellerSignIn = async (req, res) => {
// 	const { email, password } = req.body; //destrcturing req.body
// 	const response = await sellerSignInAuth(email, password);
// 	res
// 		.cookie('access_token', response.token, {
// 			httpOnly: true,
// 			secure: process.env.NODE_ENV === 'production'
// 		})
// 		.send(response);
// };

// // *****************************  PLace Order *****************************
// export const placeOrder = async (req, res) => {
// 	const body = req.body;
// 	const final = {
// 		customer: {
// 			email: body.cemail,
// 			name: body.cname,
// 			address: body.caddress,
// 			mobile: body.cmobile
// 		}
// 	};
// 	// const { email,name,address,mobile } = req.body; //destrcturing req.body
// 	const response = await placeOrderAuth(final);
// 	res.send(response);
// };

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { storeModel } from '../Models/storeModel';
import { cartModel } from '../Models/CartModel';
import { storeOrderModel } from '../Models/store-ordersModel';

//======================Seller==========================
export const sellerSignup = async (req, res) => {
	// const { name, email, password, confirmPassword } = req.body; //destrcturing req.body
	const body = req.body;
	console.log(req.body);
	const { password, confirmPassword } = body;

	const cnic = {
		cnic: {
			cnicNo: body.cnicNo,
			// cnicName: body.cnicName
		},
	};
	console.log(cnic);
	
	const user = await storeModel.findOne( cnic );
	if (user) {
		
		res.send(`Store already exist with this cnic ${cnic.cnic.cnicNo} `);
		console.log('Already exist with this cnic');
		return;
	}
	if (password !== confirmPassword) {
		res.send('Password didnot matched').status(400);
		return;
	}
	const saltRounds = 10;
	const hashPassword = await bcrypt.hash(password, saltRounds);
	const final = {
		storeName: body.storeName,
		storeType: body.storeType,
		storeLocation: body.storeLocation,
		email: body.email,
		password: hashPassword,
		mobile: body.mobile,

		address: {
			address: body.address,
			city: body.city,
			province: body.province,
			country: body.country
		},
		cnic: {
			cnicNo: body.cnicNo,
			cnicName: body.cnicName
		},
		bank: {
			bankName: body.bankName,
			branchCode: body.branchCode,
			accountTitle: body.accountTitle,
			accountNo: body.accountNo
		}
	};

	const createUser = new storeModel(final);
	try {
		const response = await createUser.save();
		if (response) {
			res
				.send({
					message: 'User Signedup Successfully'
				})
				.status(200);
		}
	} catch (error) {
		res
			.send({
				message: 'Something went wrong'
			})
			.status(500);
		return false;
	}
};

//==================SignIn============
export const sellerSignIn = async (req, res) => {
	const { email, password } = req.body; //destrcturing req.body
	// const response = await sellerSignInAuth(email, password);
	const user = await storeModel.findOne({ email: email });
	console.log(user);

	//Login with jst token
	if (!(user && (await bcrypt.compare(password, user.password)))) {
		// Create token
		res.send('Email or Password is Incorrect');
		return;
	}
	const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
		expiresIn: '2h'
	});

	res
		.cookie('access_token', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production'
		})
		.send(`LoggedIn Successfully with tolen \n ${token}`);
};

//CART
//==================AddToCart============
export const AddToCart = async (req, res) => {
	const body = req.body;
	const { productName, productID } = body;
	// const response = await AddToCartAuth(final);
	// const item = await findOne( {productID:final.productID});
	const item = await cartModel.findOne({ productID });
	console.log('Cart Object', item);
	if (item) {
		res.send(`Data Already Exist in cart`);
		return;
	}
	const cartObj = {
		productName: body.productName,
		productID: body.productID,
		price: body.price,
		discountPrice: body.discountPrice,
		stock: body.stock,
		productDescription: body.productDescription
	};

	const result = new cartModel(cartObj);
	console.log('resss', result);
	try {
		const response = await result.save();
		if (response) {
			res
				.send({
					message: 'data added Successfully'
				})
				.status(200);
		}
	} catch (error) {
		res
			.send({
				message: 'Something went wrong'
			})
			.status(500);
		return false;
	}
};

//==================DeleteFromCart============
export const DeleteFromCart = async (req, res) => {
	const { id } = req.params; //destrcturing req.body
	const item = await cartModel.findById(id);
	if (!item) {
		res.send('Item not found with this id');
		return;
	}

	try {
		const response = await cartModel.findOneAndDelete(id);
		if (response) {
			res
				.send({
					message: 'data Deleted Successfully'
				})
				.status(200);
		}
	} catch (error) {
		res
			.send({
				message: 'Something went wrong'
			})
			.status(500);
		return false;
	}
};

//==================UpdateCart============
export const UpdateCart = async (req, res) => {
	const { id } = req.params;
	const { productName, price } = req.body; //destrcturing req.body'

	// const response = await UpdateCartAuth(id, productName, price);
	const item = await cartModel.findById(id);
	console.log(item);
	if (!item) {
		res.send('Item not found with this id');
		return;
	}

	const itemUpdateObj = {
		productName: productName,
		price: price
	};
	// console.log('uppppppp', { _id: id }, itemUpdateObj);
	// const response = await UpdateItemCart({ _id: id }, itemUpdateObj);
	// const response = await cartModel.findByIdAndUpdate({ _id: id }, itemUpdateObj);
	// console.log('Sucessfully Updated ');
	try {
		const response = await cartModel.findByIdAndUpdate({ _id: id }, itemUpdateObj);
		if (response) {
			res
				.send({
					message: 'data Updated Successfully'
				})
				.status(200);
		}
	} catch (error) {
		res
			.send({
				message: 'Something went wrong'
			})
			.status(500);
		return false;
	}
};

//==================displayAllItems============
export const displayAllItems = async (req, res) => {
	// const { product } = req.body; //destrcturing req.body

	try {
		const response = await cartModel.find();
		if (response) {
			res
				.send({
					message: 'All users displayed Successfully',
					response
				})
				.status(200);
		}
	} catch (error) {
		res
			.send({
				message: 'Something went wrong'
			})
			.status(500);
		return false;
	}
};

// *****************************  PLace Order *****************************
export const placeOrder = async (req, res) => {
	try {
		const final = {
			customer: {
				email: body.cemail,
				name: body.cname,
				address: body.caddress,
				mobile: body.cmobile
			}
		};
		// const { email,name,address,mobile } = req.body; //destrcturing req.body
		console.log('final', final);
		const newOrder = new storeOrderModel(final);
		await newOrder.save();
		const id = newOrder._id;
		console.log('new id', id);

		await storeOrderModel.findOneAndUpdate(
			{ _id: id },
			{
				$push: {
					productlist: { product: body.p_id, quantity: body.pquantity, productTotal: body.pquantity }
				}
			}
		);
		const store = await storeModel.findOne({ email: body.shopMail });
		const result = store.orders.push(newOrder);
		storeModel.save();
		if (result) {
			res.send('successfully Placed Order');
			return;
		}
	} catch (error) {
		res
			.send({
				message: 'Something went wrong',
				error
			})
			.status(500);
		return false;
	}
};

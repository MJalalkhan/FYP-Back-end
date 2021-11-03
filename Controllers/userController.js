import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// import {
// 	userSignupAuth,
// 	userSignInAuth,
// 	userUpdateAuth,
// 	userDeleteAuth,
// 	AllUsersDisplayAuth,
// 	singleUserDisplayAuth
// } from '../services/User/auth';
import { userModel } from '../Models/userModel';

export const signup = async (req, res) => {
	const { name, email, password, confirmPassword } = req.body; //destrcturing req.body
	// const response = await userSignupAuth(name, email, password, confirmPassword);
	// const user = await findOne({ email: email });
	const user = await userModel.findOne({ email: email });

	console.log('User Object', user);
	if (user) {
		res.send(`User already exist with this email ${user.email} and id ${user._id}`);
		return;
	}
	if (password !== confirmPassword) {
		res.send('Password didnot matched');
		return;
	}
	const saltRounds = 10;
	const hashPassword = await bcrypt.hash(password, saltRounds);
	const userObj = {
		name,
		email,
		password: hashPassword
	};

	// const response = await create(userObj);
	const createUser = new userModel(userObj);
	try {
		const response = await createUser.save();

		if (response) {
			res
				.send({
					message: 'User Signedup Successfully'
				})
				.status(200);
			return;
		}
	} catch (error) {
		return false;
	}
};

export const signIn = async (req, res) => {
	const { email, password } = req.body; //destrcturing req.body
	// const response = await userSignInAuth(email, password);

	// const user = await findOne({ email: email });
	const user = await userModel.findOne({ email: email });

	console.log('userrrrr', user);

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

export const update = async (req, res) => {
	const { id } = req.params;
	const { name, password } = req.body; //destrcturing req.body'

	// const response = await userUpdateAuth(id, name, password);
	// const user = await findById(id);
	const user = await userModel.findById(id);

	if (!user) {
		res.send('User not found');
		return;
	}
	const passwordMatch = await bcrypt.compare(password, user.password);
	if (passwordMatch) {
		res.send('old password cannot be same as new');
		return;
	}
	// hash the new password
	const saltRounds = 10;
	const hashUpdatePassword = await bcrypt.hash(password, saltRounds);
	const userUpdateObj = {
		name,
		password: hashUpdatePassword
	};
	// const response = await updateUser({_id: id}, userUpdateObj);
	try {
		const response = await userModel.findByIdAndUpdate({ _id: id }, userUpdateObj);
		if (response) {
			res
				.send({
					message: 'data Updated Successfully',
					response
				})
				.status(200);
			return;
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

export const deleteUser = async (req, res) => {
	const { email } = req.body; //destrcturing req.body
	// const response = await userDeleteAuth(email);
	// const user = await removeUser({ email: email });

	const user = await userModel.findOne({ email });
	if (!user) {
		res.send('user not found with this id');
		return;
	}

	try {
		const response = await userModel.findOneAndDelete({ email: email });
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

export const displayAllUsers = async (req, res) => {
	const { name, email } = req.body; //destrcturing req.body
	try {
		const response = await userModel.find();
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
	// const response = await AllUsersDisplayAuth(name, email);
	// const user = await findAll();
};

export const displaySingleUser = async (req, res) => {
	const { id } = req.params;
	try {
		const response = await userModel.findOne({ _id: id });
		if (response) {
			res
				.send({
					message: 'user displayed Successfully',
					response
				})
				.status(200);
		} else {
			res
			.send({
				message: 'User not found with this id',
			});
			return;
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

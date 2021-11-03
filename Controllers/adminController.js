import { adminModel } from '../Models/AdminModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//admin
export const signUpAdmin = async (req, res) => {
	const { name, email, password, confirmPassword } = req.body; //destrcturing req.body
	const user = await adminModel.findOne({ email });
	console.log('Admin Object', user);
	// if (user) {
	// 	return `Admin already exist with this email ${user.email} and id ${user._id}`;
	// }
	if (user) {
		res.send(`Admin already exist with this email ${user.email} and id ${user._id}`).status(400);
		return;
	}
	if (password !== confirmPassword) {
		res.send('Password didnot matched').status(400);
		return;
	}

	const saltRounds = 10;
	const hashPassword = await bcrypt.hash(password, saltRounds);
	const userObj = {
		name,
		email,
		password: hashPassword
	};

	const createUser = new adminModel(userObj);

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

export const signInAdmin = async (req, res) => {
	const { email, password } = req.body; //destrcturing req.body
	const user = await adminModel.findOne({ email: email });
	console.log('admin obj', user);
	if (!user) {
		res.send('Email does not exist');
		return;
	}
	if (!await bcrypt.compare(password, user.password)) {
		res.send('Password is Incorrect');
		return;
	}
	try {
		const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
			expiresIn: '2h'
		});

		res
			.cookie('access_token', token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production'
			})
			.send(`Successfully LoggedIn with token ${token}`);
	} catch (error) {
		return false;
	}
};

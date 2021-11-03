// import jwt from 'jsonwebtoken';
// import { create, findOne, removeUser, updateUser, findAll, findById } from './authDb';
// import bcrypt from 'bcrypt';
// // import { response } from 'express';

// //Signup
// export const userSignupAuth = async (name, email, password, confirmPassword) => {
// 	// const user = await findOne({ email: email });
// 	// console.log('User Object', user);
// 	// if (user) {
// 	// 	return `User already exist with this email ${user.email} and id ${user._id}`;
// 	// }
// 	// if (password !== confirmPassword) {
// 	// 	return 'Password didnot matched';
// 	// }
// 	// const saltRounds = 10;
// 	// const hashPassword = await bcrypt.hash(password, saltRounds);
// 	// const userObj = {
// 	// 	name,
// 	// 	email,
// 	// 	password: hashPassword
// 	// };

// 	// const response = await create(userObj);
// 	// console.log('Sucessfully registered');

// 	// return response;
// };

// //Login
// export const userSignInAuth = async (email, password) => {
// 	const user = await findOne({ email: email });
// 	console.log('userrrrr', user);

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

// //remove user based on email
// export const userDeleteAuth = async (email) => {
// 	const user = await removeUser({ email: email });
// 	console.log('delete', user);
// 	if (user) {
// 		return 'Deleted Successfully';
// 	}
// 	return `User not found ${email}`;
// };

// //update user name and password based on id
// export const userUpdateAuth = async (id, name, password) => {
// 	// // const user = await updateUser(id, { name, password });
// 	// const user = await findById(id);
// 	// if (!user) {
// 	// 	return 'User not found';
// 	// }
// 	// const passwordMatch = await bcrypt.compare(password, user.password);
// 	// if (passwordMatch) {
// 	// 	// if(user.password === password && user.password !== password){}
// 	// 	return 'old password cannot be same as new';
// 	// }
// 	// // hash the new password
// 	// const saltRounds = 10;
// 	// const hashUpdatePassword = await bcrypt.hash(password, saltRounds);
// 	// const userUpdateObj = {
// 	// 	name,
// 	// 	password: hashUpdatePassword
// 	// };
// 	// const response = await updateUser({_id: id}, userUpdateObj);
// 	// console.log('Sucessfully Updated name and Password');

// 	// // update the object with new password

// 	// return response;
// 	// // return(`name updated to ${name}`);
// };

// //display all users in an array
// export const AllUsersDisplayAuth = async () => {
// 	// const user = await findAll();
// 	console.log('All Users Displayed');
// 	return user;
// };

// //display a single user by id
// export const singleUserDisplayAuth = async (id) => {
// 	const user = await findOne({ _id: id });
// 	console.log(`Details of User With this id ${id} is \n Name: ${user.name} \n Email: ${user.email}`);
// 	return user;
// };



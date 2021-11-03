//admin
import jwt from 'jsonwebtoken';
import { create, findOne} from './authDb';
import bcrypt from 'bcrypt';


export const adminSignupAuth = async (name, email, password, confirmPassword) => {
	// const user = await findOne({ email });
	// console.log('Admin Object', user);
	// if (user) {
	// 	return `Admin already exist with this email ${user.email} and id ${user._id}`;
	// }
	// if (password !== confirmPassword) {
	// 	return 'Password didnot matched';
	// }
	
	// const saltRounds = 10;
	// const hashPassword = await bcrypt.hash(password, saltRounds);
	// const userObj = {
	// 	name,
	// 	email,
	// 	password: hashPassword
	// };

	// const response = await create(userObj);

	// if(response){
	// 	return true 
	// }
	// else {
	// 	return   false;

	// }
	// console.log("resss",response);
	// return true;
};


export const adminSignInAuth = async (email, password) => {
	// const user = await findOne({ email: email });

	// //Login with jst token
	// if (!(user && (await bcrypt.compare(password, user.password)))) {
	// 	// Create token
	// 	return ('Email or Password is Incorrect')
	// };
	// const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
	// 	expiresIn: '2h'
	// });

	// return { token: token };
};
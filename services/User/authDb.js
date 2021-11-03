// import { userModel } from '../../Models/userModel';

// export const create = async (createObj) => {
// 	const user = new userModel(createObj);
// 	await user.save();
// 	return user;
// };
// export const findOne = async (searchObj) => {
// 	console.log(searchObj);
// 	const user = await userModel.findOne(searchObj);
// 	return user;
// };

// export const findById = async (id) => {
// 	const user = await userModel.findById(id);
// 	return user;
// };

// export const findAll = async (searchObj) => {
// 	const user = await userModel.find({ searchObj });
// 	return user;
// };

// export const removeUser = async (searchObj) => {
// 	const user = await userModel.findOneAndDelete(searchObj);
// 	return user;
// };

// export const updateUser = async (searchObj, updateObj) => {
// 	const user = await userModel.findByIdAndUpdate(searchObj, updateObj);
// 	return user;
// };

// export const displayAllUsers = async (searchObj, updateObj) => {
// 	const user = await userModel.findByIdAndUpdate(searchObj, updateObj);
// 	return user;
// };

// export const display = async (searchObj) => {
// 	const user = await userModel.findOne(searchObj);

// 	return user;
// };

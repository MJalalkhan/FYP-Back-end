import { storeModel } from "../../Models/storeModel";
import { cartModel } from "../../Models/CartModel";

export const create = async (createObj) => {
	const user = new storeModel(createObj);
	await user.save();
	return user;
};
export const findOne = async (searchObj) => {
	const user = await storeModel.findOne(searchObj);
	return user;
};

export const findById = async (id) => {
	const item = await cartModel.findById(id);
	return item;
};
export const findAll = async (searchObj) => {
	const item = await cartModel.find({ searchObj });
	return item;
};

export const RemoveFromCart = async (id) => {
	console.log('Deleted SuccessFully');
	const item = await cartModel.findOneAndDelete({_id:id});
	return item;
};

export const UpdateItemCart = async (id, updateObj) => {
	const item = await cartModel.findByIdAndUpdate(id, updateObj);
	return item;
};


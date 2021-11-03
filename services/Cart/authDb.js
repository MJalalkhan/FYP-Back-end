import { cartModel } from "../../Models/CartModel";

export const create = async (createObj) => {
	const item = new cartModel(createObj);
	await item.save();
	return item;
};
export const findOne = async (searchObj) => {
	const item = await cartModel.findOne(searchObj);
	return item;
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
	console.log("herere",id);
	const item = await cartModel.findOneAndDelete(id);
	return item;
};

export const UpdateItemCart = async (id, updateObj) => {
	const item = await cartModel.findByIdAndUpdate(id, updateObj);
	return item;
};

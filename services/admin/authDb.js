import { adminModel } from "../../Models/AdminModel";

export const create = async (createObj) => {
	console.log("creeeate",createObj);
	const user = new adminModel(createObj);
	try {
		const response = await user.save();
		return true;
	} catch (error) {
		return false;
	}
 

};
export const findOne = async (searchObj) => {
	const user = await adminModel.findOne(searchObj);
	return user;
};



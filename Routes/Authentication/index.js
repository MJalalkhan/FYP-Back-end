import express from 'express';
// import * as authController from '../../Controllers/authController';
import * as adminController from '../../Controllers/adminController'
import * as userController from '../../Controllers/userController'
import * as storeController from '../../Controllers/storeController'
import  {verifyToken} from '../../middleware/auth'

const router = express.Router();
//================user=============
router.post('/signup', userController.signup);
router.post('/signIn', userController.signIn);
router.post('/updateUser/:id', verifyToken, userController.update);
router.delete('/deleteUser', verifyToken,userController.deleteUser);
router.get('/displayAllUsers',userController.displayAllUsers);
router.get('/displaySingleUser/:id', userController.displaySingleUser);

//================admin=============
router.post("/AdminSignup", adminController.signUpAdmin);
router.post("/AdminSignin", adminController.signInAdmin);

//================Seller============
router.post("/sellerSignup",storeController.sellerSignup);
router.post("/sellerSignin", storeController.sellerSignIn);
router.post("/AddToCart", storeController.AddToCart);
router.delete("/DeleteFromCart/:id",verifyToken, storeController.DeleteFromCart);
router.post("/UpdateCart/:id", verifyToken,storeController.UpdateCart);
router.post("/displayAllItems", storeController.displayAllItems);
router.post("/placeOrder", storeController.placeOrder);

export default router;

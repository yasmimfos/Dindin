const { Router } = require('express');
const tokenValidation = require('../middleware/tokenValidation');
const userSchema = require('../schemas/userSchema');
const bodyValidation = require('../middleware/bodyvalidation');
const { userRegisterController, showUserController, updateUserController, deleteUserController } = require('../controllers');


const userRouter = Router();

userRouter.post('/', bodyValidation(userSchema), userRegisterController.handle);
userRouter.use(tokenValidation);
userRouter.get('/', showUserController.handle);
userRouter.put('/', bodyValidation(userSchema), updateUserController.handle);
userRouter.delete('/', deleteUserController.handle);

module.exports = userRouter;
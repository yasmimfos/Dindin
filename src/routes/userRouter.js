const { Router } = require('express');
const tokenValidation = require('../middleware/tokenValidation');
const profile = require('../controllers/users/profile');
const userSchema = require('../schemas/userSchema');
const bodyValidation = require('../middleware/bodyvalidation');
const updateUser = require('../controllers/users/updateUser');
const deleteUser = require('../controllers/users/deleteUser');
const userRegister = require('../controllers/users/userRegister');

const userRouter = Router();

userRouter.post('/', bodyValidation(userSchema), userRegister);
userRouter.use(tokenValidation);
userRouter.get('/', profile);
userRouter.put('/', bodyValidation(userSchema), updateUser);
userRouter.delete('/', deleteUser);

module.exports = userRouter;
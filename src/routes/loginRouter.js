const { Router } = require('express');
const loginSchema = require('../schemas/loginSchema');
const bodyValidation = require('../middleware/bodyvalidation');
const { loginUserController } = require('../controllers');

const loginRouter = Router();

loginRouter.post('/', bodyValidation(loginSchema), loginUserController);

module.exports = loginRouter;
const { Router } = require('express');
const loginSchema = require('../schemas/loginSchema');
const bodyValidation = require('../middleware/bodyvalidation');
const login = require('../controllers/login/login');

const loginRouter = Router();

loginRouter.post('/', bodyValidation(loginSchema), login);

module.exports = loginRouter;
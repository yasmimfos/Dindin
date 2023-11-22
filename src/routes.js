const express = require('express');

const { bodyValidation, tokenValidation, typeValidation } = require('./middleware/validation');

const login = require('./controllers/login');
const { userRegister, profile, updateUser, deleteUser } = require('./controllers/users');
const { listCategories, createCategory, updateCategory, deleteCategory } = require('./controllers/category');
const { balance, transactionDetails } = require('./controllers/transactions');
const { amount, amountRegister, amountUpdate } = require('./controllers/amount');

const userSchema = require('./schemas/userSchema');
const loginSchema = require('./schemas/loginSchema');
const transactionSchema = require('./schemas/transactionSchema');
const amountSchema = require('./schemas/amountSchema');

const routes = express();

routes.post('/usuario', bodyValidation(userSchema), userRegister);
routes.post('/login', bodyValidation(loginSchema), login);

routes.use(tokenValidation);
routes.get('/perfil', profile);
routes.put('/usuario', bodyValidation(userSchema), updateUser);
routes.delete('/usuario', deleteUser);

routes.get('/categoria', listCategories);
routes.post('/categoria', createCategory);
routes.put('/categoria', updateCategory);
routes.delete('/categoria', deleteCategory)

routes.get('/saldo', amount);
routes.post('/saldo', bodyValidation(amountSchema), amountRegister);
routes.put('/saldo', bodyValidation(amountSchema), amountUpdate);

routes.get('/transacoes', balance);
routes.get('/transacoes/entradas', balance);
routes.get('/transacoes/saidas', balance);
// routes.get('/entradas/extrato', extratoTransacoes);
routes.get('/transacoes/:id', transactionDetails);
routes.post('/transacoes', bodyValidation(transactionSchema), typeValidation, transactionDetails);
// routes.put('/entradas/:id', editarentradas);
// routes.delete('/entradas/:id', removerentradas);


module.exports = routes;
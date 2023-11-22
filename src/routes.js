const express = require('express');

const { bodyValidation, tokenValidation, typeValidation } = require('./middleware/validation');

const login = require('./controllers/login');
const { userRegister, profile, updateUser, deleteUser } = require('./controllers/users');
const { listCategories, createCategory, updateCategory, deleteCategory } = require('./controllers/category');
const { balance, transactionDetails, createTransaction, updateTransaction, deleteTransaction, balanceTransaction } = require('./controllers/transactions');
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
routes.get('/transacoes/entradas', balance); //fazer função
routes.get('/transacoes/saidas', balance);//fazer função
routes.get('/transacoes/extrato', balanceTransaction);
routes.get('/transacoes/:id', transactionDetails);
routes.post('/transacoes', bodyValidation(transactionSchema), typeValidation, createTransaction);
routes.put('/transacoes/:id', bodyValidation(transactionSchema), typeValidation, updateTransaction);
routes.delete('/transacoes/:id', deleteTransaction);


module.exports = routes;
const express = require('express');

const login = require('./controllers/login/login');

const userSchema = require('./schemas/userSchema');
const loginSchema = require('./schemas/loginSchema');
const transactionSchema = require('./schemas/transactionSchema');
const amountSchema = require('./schemas/amountSchema');

const tokenValidation = require('./middleware/tokenValidation');
const bodyValidation = require('./middleware/bodyvalidation');
const typeValidation = require('./middleware/typeValidation');
const profile = require('./controllers/users/profile');
const updateUser = require('./controllers/users/updateUser');
const deleteUser = require('./controllers/users/deleteUser');
const userRegister = require('./controllers/users/userRegister');
const updateCategory = require('./controllers/category/updateCategory');
const deleteCategory = require('./controllers/category/deleteCategory');
const createCategory = require('./controllers/category/createCategory');
const listCategories = require('./controllers/category/listCategories');
const amountConsult = require('./controllers/amount/amountConsult');
const amountUpdate = require('./controllers/amount/amountUpdate');
const amountRegister = require('./controllers/amount/amountRegister');
const balance = require('./controllers/transactions/balance');
const balanceTransaction = require('./controllers/transactions/balanceTransaction');
const transactionDetails = require('./controllers/transactions/transactionDetails');
const deleteTransaction = require('./controllers/transactions/deleteTransaction');
const createTransaction = require('./controllers/transactions/createTransaction');
const updateTransaction = require('./controllers/transactions/updateTransaction');


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

routes.get('/saldo', amountConsult);
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
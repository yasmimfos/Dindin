const { Router } = require('express');
const balance = require('../controllers/balance/balance');
const balanceReceive = require('../controllers/balance/balanceReceive');
const balancePayable = require('../controllers/balance/balancePayable');
const balanceTransaction = require('../controllers/balance/balanceTransaction');
const transactionDetails = require('../controllers/transactions/transactionDetails');
const deleteTransaction = require('../controllers/transactions/deleteTransaction');
const confirmTransaction = require('../controllers/transactions/confirmTransaction');
const typeValidation = require('../middleware/typeValidation');
const createTransaction = require('../controllers/transactions/createTransaction');
const updateTransaction = require('../controllers/transactions/updateTransaction');
const transactionSchema = require('../schemas/transactionSchema');
const tokenValidation = require('../middleware/tokenValidation');
const bodyValidation = require('../middleware/bodyvalidation');

const transactionsRouter = Router();

transactionsRouter.use(tokenValidation);
transactionsRouter.get('/', balance);
transactionsRouter.get('/entradas', balanceReceive);
transactionsRouter.get('/saidas', balancePayable);
transactionsRouter.get('/extrato', balanceTransaction);
transactionsRouter.get('/:id', transactionDetails);
transactionsRouter.post('/', bodyValidation(transactionSchema), typeValidation, createTransaction);
transactionsRouter.put('/:id', bodyValidation(transactionSchema), typeValidation, updateTransaction);
transactionsRouter.delete('/:id', deleteTransaction);
transactionsRouter.put('/confirmar/:id', confirmTransaction)

module.exports = transactionsRouter;
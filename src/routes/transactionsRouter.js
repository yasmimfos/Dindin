const { Router } = require('express');
const typeValidation = require('../middleware/typeValidation');
const transactionSchema = require('../schemas/transactionSchema');
const tokenValidation = require('../middleware/tokenValidation');
const bodyValidation = require('../middleware/bodyvalidation');
const { balanceController, balanceReceiveController, balancePayableController, balanceTransactionController, transactionDetailsController, createTransactionController, deleteTransactionController, confirmTransactionController } = require('../controllers');
const updateTransactionController = require('../controllers/transactions/updateTransactionController');

const transactionsRouter = Router();

transactionsRouter.use(tokenValidation);
transactionsRouter.get('/', balanceController.handle);
transactionsRouter.get('/entradas', balanceReceiveController.handle);
transactionsRouter.get('/saidas', balancePayableController.handle);
transactionsRouter.get('/extrato', balanceTransactionController.handle);
transactionsRouter.get('/:id', transactionDetailsController.handle);
transactionsRouter.post('/', bodyValidation(transactionSchema), typeValidation, createTransactionController.handle);
transactionsRouter.put('/:id', bodyValidation(transactionSchema), typeValidation, updateTransactionController.handle);
transactionsRouter.delete('/:id', deleteTransactionController.handle);
transactionsRouter.put('/confirmar/:id', confirmTransactionController.handle)

module.exports = transactionsRouter;
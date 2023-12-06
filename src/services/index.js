const { amountConsultService, amountRegisterService, amountUpdateService } = require('./amount');
const { updateUserService, userRegisterService, deleteUserService } = require('./users');
const { createCategoryService, listCategoriesService, updateCategoryService, deleteCategoryService } = require('./category');
const { balanceTransactionService, balanceService, balancePayableService, balanceReceiveService } = require('./balance');
const { updateTransactionService, transactionDetailsService, createTransactionService, confirmTransactionService, deleteTransactionService } = require('./transactions');

module.exports = {
    amountConsultService,
    amountRegisterService,
    amountUpdateService,
    updateUserService,
    userRegisterService,
    deleteUserService,
    createCategoryService,
    listCategoriesService,
    updateCategoryService,
    deleteUserService,
    createTransactionService,
    confirmTransactionService,
    deleteTransactionService,
    transactionDetailsService,
    updateTransactionService,
    balanceService,
    balancePayableService,
    balanceReceiveService,
    balanceTransactionService
}
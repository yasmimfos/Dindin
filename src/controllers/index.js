const loginUserController = require('./login');
const {
    amountConsultController,
    amountRegisterController,
    amountUpdateController
} = require('./amount');
const {
    deleteUserController,
    updateUserController,
    userRegisterController,
    showUserController
} = require('./users');

const {
    createCategoryController,
    listCategoriesController,
    deleteCategoryController,
    updateCategoryController
} = require('./category');
const {
    confirmTransactionController,
    createTransactionController,
    deleteTransactionController,
    transactionDetailsController,
    updateTransactioncontroller
} = require('./transactions');
const {
    balanceController,
    balancePayableController,
    balanceReceiveController,
    balanceTransactionController
} = require('./balance')

module.exports = {
    loginUserController,
    amountConsultController,
    amountUpdateController,
    amountRegisterController,
    deleteUserController,
    updateUserController,
    userRegisterController,
    showUserController,
    confirmTransactionController,
    createCategoryController,
    createTransactionController,
    deleteTransactionController,
    transactionDetailsController,
    updateCategoryController,
    listCategoriesController,
    deleteCategoryController,
    balanceController,
    balancePayableController,
    balanceReceiveController,
    balanceTransactionController
}
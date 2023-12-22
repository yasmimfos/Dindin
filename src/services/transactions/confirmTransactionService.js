const { ConflictError, NotAuthorized } = require("../../errors");
const amountRepository = require("../../repositories/amountRepository");
const transactionsRepository = require("../../repositories/transactionsRepository");
const pendencies = require("../../utils/pendencies");

const confirmTransactionService = {
    async execute(transactionId, userId) {
        const transaction = await transactionsRepository.getById(transactionId);
        const amount = await amountRepository.getAmount(userId);


        if (transaction.pago == true) {
            throw new ConflictError('Essa transação já foi confirmada');
        }

        if (transaction.tipo === 'saida') {
            if (amount.valor < transaction.valor) {
                throw new NotAuthorized('Saldo insuficiente');
            }

            const newAmount = amount.valor - transaction.valor
            await amountRepository.updateAmount(userId, newAmount);
            await transactionsRepository.confirm(userId);

            const pay = await pendencies(userId, newAmount);
            return { saldo: newAmount, pay }
        } else {
            const newAmount = amount.valor + transaction.valor
            await amountRepository.updateAmount(userId, newAmount);
            await transactionsRepository.confirm(userId);

            const pay = pendencies(userId, newAmount);

            return { saldo: newAmount, pay }
        };
    }
}
module.exports = confirmTransactionService;
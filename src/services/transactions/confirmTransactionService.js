const amountRepository = require("../../repositories/amountRepository");
const transactionsRepository = require("../../repositories/transactionsRepository");
const pendencies = require("../../utils/pendencies");

const confirmTransactionService = {
    async execute(transactionId, userId) {
        const transaction = transactionsRepository.getById(transactionId);
        const amount = await amountRepository.getAmount(userId);

        if (transaction.pago == true) {
            return res.status(401).json({ mensagem: 'Essa transação já foi confirmada' })
        }

        if (transaction.tipo === 'saida') {
            if (amount.valor < transaction.valor) {
                return res.status(403).json({ mensagem: 'Saldo insuficiente' })
            }

            const newAmount = amount.valor - transaction.valor
            await amountRepository.update(userId, newAmount);

            const pay = await pendencies(userId, newAmount);
            return { saldo: newAmount, pay }
        } else {
            const newAmount = amount.valor + transaction.valor
            await amountRepository.update(userId, newAmount);

            const pay = pendencies(userId, newAmount);

            return { saldo: newAmount, pay }
        };
    }
}
module.exports = confirmTransactionService;
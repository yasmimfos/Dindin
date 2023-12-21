const transactionsRepository = require("../../repositories/transactionsRepository");
const { verifyTransactions } = require("../../utils");

const updateTransactionService = {
    async execute(id, transactionId, tipo, descricao, valor, data, categoria) {
        verifyTransactions(transactionId);

        const register = transactionsRepository.update(descricao, tipo, valor, categoria, data, id, transactionId);
        return register;
    }
}
module.exports = updateTransactionService;
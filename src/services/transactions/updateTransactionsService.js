const transactionsRepository = require("../../repositories/transactionsRepository");

const updateTransactionService = {
    async execute(id, transactionId, tipo, descricao, valor, data, categoria, res) {
        const verifyId = await transactionsRepository.getById(transactionId);
        if (verifyId.length < 1) {
            return res.status(404).json({ mensagem: 'Transação não encontrada' });
        }
        const register = transactionsRepository.update(descricao, tipo, valor, categoria, data, id, transactionId);
        return register;
    }
}
module.exports = updateTransactionService;
const transactionsRepository = require("../../repositories/transactionsRepository");

const transactionDetailsService = {
    async execute(id, transactionId, res) {
        const details = await transactionsRepository.getByIdAndUser(transactionId, id)
        if (details < 1) {
            return res.status(404).json({ mensagem: 'Transação inválida' });
        };
        return details;
    }
}
module.exports = transactionDetailsService;
const { NotFoundError } = require("../../errors");
const transactionsRepository = require("../../repositories/transactionsRepository");

const deleteTransactionService = {
    async execute(id, transactionId) {
        const verifyId = await transactionsRepository.getByIdAndUser(transactionId, id);

        if (verifyId.length < 1) {
            throw new NotFoundError('Transação não encontrada')
        }
        const deleted = await transactionsRepository.delete(transactionId);
        return deleted;
    }
}
module.exports = deleteTransactionService;
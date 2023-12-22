const NotFoundError = require("../../errors/NotFoundError");
const transactionsRepository = require("../../repositories/transactionsRepository");
const { verifyTransactions } = require("../../utils");

const transactionDetailsService = {
    async execute(id, transactionId) {
        await verifyTransactions(transactionId);

        const details = await transactionsRepository.getByIdAndUser(transactionId, id)
        return details;
    }
}
module.exports = transactionDetailsService;
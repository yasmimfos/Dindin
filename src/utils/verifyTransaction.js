const { transactionsRepository } = require("../repositories");
const { NotFoundError } = require("../errors");

const verifyTransactions = async (id) => {
    const transactions = await transactionsRepository.getById(id);
    if (!transactions) throw new NotFoundError("Transação não encontrado.");
};

module.exports = verifyTransactions;
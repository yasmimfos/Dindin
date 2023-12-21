const { categoryRepository, transactionsRepository } = require("../../repositories");

const createTransactionService = {
    async execute(id, tipo, descricao, valor, data, categoria) {
        const categoryValidation = await categoryRepository.verify(categoria);
        if (!categoryValidation[0]) {
            await categoryRepository.create(categoria);
        };
        const register = await transactionsRepository.create(id, tipo, descricao, valor, data, categoria);
        console.log(register[0].valor)
        return register;
    }
};
module.exports = createTransactionService;
const { categoryRepository, transactionsRepository } = require("../../repositories");

const createTransactionService = {
    async execute(id, tipo, descricao, valor, data, categoria, res) {
        const categoryValidation = categoryRepository.verify(categoria);
        if (categoryValidation.length < 1) {
            await connect('categorias').insert({ categoria });
        };

        const register = await transactionsRepository.create(id, tipo, descricao, valor, data, categoria);
        return register;
    }
};
module.exports = createTransactionService;
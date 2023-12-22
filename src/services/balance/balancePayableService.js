const { NotFoundError } = require("../../errors");
const transactionsRepository = require("../../repositories/transactionsRepository");

const balancePayableService = {
    async execute(id) {
        const list = await transactionsRepository.getByType(id, 'saida');
        if (!list[0]) {
            throw new NotFoundError('Não há saídas registradas');
        }
        const soma = await transactionsRepository.sum(id, 'saida');

        return { list, soma };
    }
}
module.exports = balancePayableService;
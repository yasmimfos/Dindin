const { NotFoundError } = require("../../errors");
const transactionsRepository = require("../../repositories/transactionsRepository");

const balanceReceiveService = {
    async execute(id) {
        const list = await transactionsRepository.getByType(id, 'entrada');

        if (!list[0]) {
            throw new NotFoundError('Não há entradas registradas');
        }
        const soma = await transactionsRepository.sum(id, 'entrada');
        return { list, soma };
    }
}
module.exports = balanceReceiveService;
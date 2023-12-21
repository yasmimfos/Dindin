const transactionsRepository = require("../../repositories/transactionsRepository");

const balanceReceiveService = {
    async execute(id, res) {
        const list = await transactionsRepository.getByType(id, 'entrada');
        if (list[0]) {
            throw new NotFoundError('Não há saídas registradas');
        }
        const soma = await transactionsRepository.sum(id, 'entrada')
        return { list, soma };
    }
}
module.exports = balanceReceiveService;
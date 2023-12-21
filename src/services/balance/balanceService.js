const { NotFoundError } = require("../../errors");
const transactionsRepository = require("../../repositories/transactionsRepository");

const balanceService = {
    async execute(id) {
        const list = await transactionsRepository.getByUser(id);
        if (list < 1) {
            throw new NotFoundError('Não há transações registradas');
        };
        return list;
    }
}
module.exports = balanceService;
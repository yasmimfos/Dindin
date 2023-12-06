const transactionsRepository = require("../../repositories/transactionsRepository");

const balanceService = {
    async execute(id) {
        const list = await transactionsRepository.getByUser(id);
        if (list < 1) {
            return res.status(404).json({ mensagem: 'Não há transações registradas' });
        };
        return list;
    }
}
module.exports = balanceService;
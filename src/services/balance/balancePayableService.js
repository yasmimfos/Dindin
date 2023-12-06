const transactionsRepository = require("../../repositories/transactionsRepository");

const balancePayableService = {
    async execute(id) {
        const list = await transactionsRepository.getByType(id, 'saida');
        if (list < 1) {
            return res.status(404).json({ mensagem: 'Não há saídas registradas' });
        }
        //somar o total de saidas
        return list;
    }
}
module.exports = balancePayableService;
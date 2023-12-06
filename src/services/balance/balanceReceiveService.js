const transactionsRepository = require("../../repositories/transactionsRepository");

const balanceReceiveService = {
    async execute(id) {
        const list = await transactionsRepository.getByType(id, 'entrada');
        if (list < 1) {
            return res.status(404).json({ mensagem: `Não há transações do tipo ${tipo} registradas` });
        }
        //somar o total de entradas
        return list;
    }
}
module.exports = balanceReceiveService;
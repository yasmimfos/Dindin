const transactionsRepository = require("../../repositories/transactionsRepository");

const balanceTransactionService = {
    async execute(id) {
        const receive = await transactionsRepository.sum(id, 'entrada');
        const payable = await transactionsRepository.sum(id, 'saida');

        const balanceTotal = {
            entrada: Number(receive.entrada) || 0,
            saida: Number(payable.saida) || 0
        };

        const receiveConfirm = await transactionsRepository.sumByTypeAndPay(id, 'entrada', true);
        const payableConfirm = await transactionsRepository.sumByTypeAndPay(id, 'saida', true);

        const balanceConfirm = {
            entrada: Number(receiveConfirm.entrada) || 0,
            saida: Number(payableConfirm.saida) || 0
        };

        const receivePreview = await transactionsRepository.sumByTypeAndPay(id, 'entrada', false);
        const payablePreview = await transactionsRepository.sumByTypeAndPay(id, 'saida', false);

        const balancePreview = {
            entrada: Number(receivePreview.entrada) || 0,
            saida: Number(payablePreview.saida) || 0
        };

        return {
            Extrato: balanceTotal,
            Confirmadas: balanceConfirm,
            Previsões: balancePreview
        };

    }
}
module.exports = balanceTransactionService;
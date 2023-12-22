const transactionsRepository = require("../../repositories/transactionsRepository");

const balanceTransactionService = {
    async execute(id) {
        const receive = await transactionsRepository.sum(id, 'entrada');
        const payable = await transactionsRepository.sum(id, 'saida');

        const balanceTotal = {
            entrada: Number(receive[0].sum) || 0,
            saida: Number(payable[0].sum) || 0
        };

        const receiveConfirm = await transactionsRepository.sumByTypeAndPay(id, 'entrada', true);
        const payableConfirm = await transactionsRepository.sumByTypeAndPay(id, 'saida', true);

        const balanceConfirm = {
            entrada: Number(receiveConfirm[0].sum) || 0,
            saida: Number(payableConfirm[0].sum) || 0
        };

        const receivePreview = await transactionsRepository.sumByTypeAndPay(id, 'entrada', false);
        const payablePreview = await transactionsRepository.sumByTypeAndPay(id, 'saida', false);

        const balancePreview = {
            entrada: Number(receivePreview[0].sum) || 0,
            saida: Number(payablePreview[0].sum) || 0
        };

        return {
            Extrato: balanceTotal,
            Confirmadas: balanceConfirm,
            Previsões: balancePreview
        };

    }
}
module.exports = balanceTransactionService;
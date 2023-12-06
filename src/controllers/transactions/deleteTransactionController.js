const deleteTransactionService = require("../../services/transactions/deleteTransactionsService");

const deleteTransactionController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        const transactionId = parseInt(req.params.id);

        try {
            const deleted = await deleteTransactionService.execute(id, transactionId);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }

    }
};

module.exports = deleteTransactionController;
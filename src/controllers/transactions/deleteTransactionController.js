const deleteTransactionService = require("../../services/transactions/deleteTransactionsService");
const { NotFoundError } = require("../../errors");

const deleteTransactionController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        const transactionId = parseInt(req.params.id);

        try {
            const deleted = await deleteTransactionService.execute(id, transactionId);
            return res.status(204).send();
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }

    }
};

module.exports = deleteTransactionController;
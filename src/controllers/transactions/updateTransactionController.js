const { NotFoundError } = require("../../errors");
const updateTransactionService = require("../../services/transactions/updateTransactionsService");

const updateTransactionController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        const transactionId = parseInt(req.params.id);
        const { tipo, descricao, valor, data, categoria } = req.body;

        try {
            const updated = await updateTransactionService.execute(id, transactionId, tipo, descricao, valor, data, categoria);
            return res.json(updated[0]);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = updateTransactionController;
const NotFoundError = require("../../errors/NotFoundError");
const transactionDetailsService = require("../../services/transactions/transactionDetailsService");

const transactionDetailsController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        const transactionId = parseInt(req.params.id);

        try {
            const details = await transactionDetailsService.execute(id, transactionId)
            return res.json(details);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = transactionDetailsController;
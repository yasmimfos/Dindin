const transactionDetailsService = require("../../services/transactions/transactionDetailsService");

const transactionDetailsController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        const transactionId = parseInt(req.params.id);

        try {
            const details = await transactionDetailsService.execute(id, transactionId, res)
            return res.json(details);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = transactionDetailsController;
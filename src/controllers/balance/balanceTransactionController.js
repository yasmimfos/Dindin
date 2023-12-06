const balanceTransactionService = require("../../services/balance/balanceTransactionService");

const balanceTransactionController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;

            const balance = balanceTransactionService.execute(id);
            return res.status(200).json({ balance });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = balanceTransactionController;
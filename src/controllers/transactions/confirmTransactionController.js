const { confirmTransactionService } = require("../../services");

const confirmTransactionController = {
    async handle(req, res) {
        try {
            const transactionId = req.params.id;
            const userId = req.userLogged.id;
            const { newAmount, pay } = await confirmTransactionService.execute(transactionId, userId);
            return res.json({ saldo: newAmount, pay })
        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' })
        };
    }
};

module.exports = confirmTransactionController;
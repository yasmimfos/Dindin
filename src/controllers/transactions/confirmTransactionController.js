const { NotAuthorized, ConflictError } = require("../../errors");
const { confirmTransactionService } = require("../../services");

const confirmTransactionController = {
    async handle(req, res) {
        try {
            const transactionId = req.params.id;
            const userId = req.userLogged.id;
            const { newAmount, pay } = await confirmTransactionService.execute(transactionId, userId);
            return res.json({ saldo: newAmount, pay })
        } catch (error) {
            if (error instanceof NotAuthorized) {
                return res.status(403).json({ error: error.message });
            } else if (error instanceof ConflictError) {
                return res.status(400).json({ error: error.message })
            }
            console.log(error)
            return res.status(500).json({ mensagem: 'Erro interno do servidor' })
        };
    }
};

module.exports = confirmTransactionController;
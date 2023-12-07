const createTransactionService = require("../../services/transactions/createTransactionsService");

const createTransactionController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;
            const { tipo, descricao, valor, data, categoria } = req.body;

            const register = await createTransactionService.execute(id, tipo, descricao, valor, data, categoria, res);
            return res.status(201).json(register[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = createTransactionController;
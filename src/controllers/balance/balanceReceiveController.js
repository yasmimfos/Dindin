const { NotFoundError } = require("../../errors");
const balanceReceiveService = require("../../services/balance/balanceReceiveService");

const balanceReceiveController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;

            const { list, soma } = await balanceReceiveService.execute(id, res);
            return res.json({ list, soma });
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message });
            }
            res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = balanceReceiveController;
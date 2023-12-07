const balancePayableService = require("../../services/balance/balancePayableService");

const balancePayableController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;

            const list = balancePayableService.execute(id, res);
            return res.json(list);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = balancePayableController;
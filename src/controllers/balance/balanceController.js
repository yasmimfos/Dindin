const balanceService = require("../../services/balance/balanceService");

const balanceController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;
            const list = await balanceService.execute(id, res);
            return res.json(list);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = balanceController;
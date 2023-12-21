const balanceService = require("../../services/balance/balanceService");

const balanceController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;
            const list = await balanceService.execute(id);
            return res.json(list);
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = balanceController;
const balanceReceiveService = require("../../services/balance/balanceReceiveService");

const balanceReceiveController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;

            const list = await balanceReceiveService.execute(id, res);
            return res.json(list);
        } catch (error) {
            res.status(500).json({ mensagem: 'Erro interno do servidor' });
        };
    }
};

module.exports = balanceReceiveController;
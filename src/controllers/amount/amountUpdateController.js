const amountUpdateService = require("../../services/amount/amountUpdateService");

const amountUpdateController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        const { valor } = req.body;
        try {
            const { value, pay } = await amountUpdateService.execute(id, valor);
            return res.json({ saldo: value, pay });
        } catch (error) {
            console.log(error)
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = amountUpdateController;
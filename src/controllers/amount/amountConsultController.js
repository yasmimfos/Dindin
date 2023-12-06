const amountConsultService = require("../../services/amount/amountConsultService");

const amountConsultController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        try {
            const { value, pay } = amountConsultService.execute(id);
            return res.json({ value, pay });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = amountConsultController;
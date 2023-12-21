const { NotFoundError } = require("../../errors");
const amountConsultService = require("../../services/amount/amountConsultService");

const amountConsultController = {
    async handle(req, res) {
        const { id } = req.userLogged;
        try {
            const { value, pay } = await amountConsultService.execute(id);
            return res.json({ value, pay });
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res.status(404).json({ error: error.message })
            }
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};

module.exports = amountConsultController;
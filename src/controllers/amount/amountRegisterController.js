const connect = require("../../connect/connect");
const amountRegisterService = require("../../services/amount/amountRegisterService");
const pendencies = require("../../utils/pendencies");

const amountRegisterController = {
    async handle(req, res) {
        try {
            const { id } = req.userLogged;
            const { valor } = req.body;

            const { newValue, pay } = await amountRegisterService.execute(id, valor);

            return res.json({ saldo: newValue, pay });
        } catch (error) {
            return res.status(500).json({ mensagem: 'Erro interno do servidor' });
        }
    }
};
module.exports = amountRegisterController;
const { amountRepository } = require("../../repositories");
const pendencies = require("../../utils/pendencies");

const amountConsultService = {
    async execute(id) {
        const value = await amountRepository.getAmount(id);
        if (value.length < 1) {
            return res.status(404).json({ mensagem: 'Ainda não há saldo cadastrado' });
        };
        const pay = await pendencies(id, value.valor);
        return { value, pay }
    }
}
module.exports = amountConsultService;
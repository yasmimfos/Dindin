const { amountRepository } = require("../../repositories");
const pendencies = require("../../utils/pendencies");

const amountRegisterService = {
    async execute(id, valor) {
        const value = amountRepository.getAmount(id, valor);
        if (value.length >= 1) {
            return res.status(403).json({ mensagem: 'Já há saldo cadastrado. Tente atualizar o saldo ou cadastre uma entrada ou saída para alterar o saldo' });
        }
        const newValue = await amountRepository.registerAmount(id, valor);
        const pay = await pendencies(id, newValue.valor);

        return { newValue, pay }
    }
}
module.exports = amountRegisterService;
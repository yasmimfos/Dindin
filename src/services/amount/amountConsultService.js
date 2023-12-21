const { NotFoundError } = require("../../errors");
const { amountRepository } = require("../../repositories");
const pendencies = require("../../utils/pendencies");

const amountConsultService = {
    async execute(id) {
        const value = await amountRepository.getAmount(id);
        if (!value) {
            throw new NotFoundError('Ainda não há saldo cadastrado');
        };
        const pay = await pendencies(id, value.valor);
        return { value, pay }
    }
}
module.exports = amountConsultService;
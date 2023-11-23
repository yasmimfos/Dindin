const connect = require("../../connect/connect");
const pendencies = require("../transactions/pendencies");

const amountConsult = async (req, res) => {
    const { id } = req.userLogged;
    try {
        const value = await connect('saldo').where({ usuario_id: id }).select('valor').first();

        if (value.length < 1) {
            return res.status(404).json({ mensagem: 'Ainda não há saldo cadastrado' });
        };
        const pague = await pendencies(id, value.valor);

        return res.json({ value, pague });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = amountConsult;
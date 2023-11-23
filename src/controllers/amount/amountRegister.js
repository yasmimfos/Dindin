const connect = require("../../connect/connect");
const pendencies = require("../transactions/pendencies");

const amountRegister = async (req, res) => {
    const { id } = req.userLogged;
    const { valor } = req.body;

    try {
        const value = await connect('saldo').where({ usuario_id: id }).select('valor');

        if (value.length >= 1) {
            return res.status(403).json({ mensagem: 'Já há saldo cadastrado. Tente atualizar o saldo ou cadastre uma entrada ou saída para alterar o saldo' });
        }
        const newValue = await connect('saldo').insert({ usuario_id: id, valor }).returning('valor');

        const pague = await pendencies(id, value.valor);

        return res.json({ saldo: newValue, pague });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};
module.exports = amountRegister;
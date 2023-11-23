const connect = require("../../connect/connect");
const pendencies = require("../../utils/pendencies");

const amountUpdate = async (req, res) => {
    const { id } = req.userLogged;
    const { valor } = req.body;

    try {
        const value = await connect('saldo').update({ usuario_id: id, valor }).returning('valor').first();

        const pague = await pendencies(id, value.valor);

        return res.json({ saldo: value, pague });
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = amountUpdate;
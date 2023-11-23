const connect = require("../../connect/connect");

const amountUpdate = async (req, res) => {
    const { id } = req.userLogged;
    const { valor } = req.body;

    try {
        const value = await connect('saldo').update({ usuario_id: id, valor }).returning('valor');
        return res.json(value[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = amountUpdate;
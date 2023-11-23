const connect = require("../../connect/connect");

const updateTransaction = async (req, res) => {
    const { id } = req.userLogged;
    const transactionId = parseInt(req.params.id);
    const { tipo, descricao, valor, data, categoria } = req.body;

    try {
        const verifyId = await connect('transacoes').where({ id: transactionId });
        if (verifyId.length < 1) {
            return res.status(404).json({ mensagem: 'Transação não encontrada' });
        }
        const register = await connect('transacoes').update({ descricao, tipo, valor, categoria, data, usuario_id: id, pago: false }).where({ id: transactionId }).returning('*');
        return res.json(register[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = updateTransaction;
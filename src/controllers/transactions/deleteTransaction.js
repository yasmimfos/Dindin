const connect = require("../../connect/connect");

const deleteTransaction = async (req, res) => {
    const { id } = req.userLogged;
    const transactionId = parseInt(req.params.id);

    try {
        const verifyId = await connect('transacoes').where({ id: transactionId, usuario_id: id });
        if (verifyId.length < 1) {
            return res.status(404).json({ mensagem: 'Transação não encontrada' });
        }
        await connect('transacoes').delete().where({ id: transactionId });
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = deleteTransaction;
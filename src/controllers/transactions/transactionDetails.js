const connect = require("../../connect/connect");

const transactionDetails = async (req, res) => {
    const { id } = req.userLogged;
    const transactionId = parseInt(req.params.id);

    try {
        const details = await connect('transacoes').select('descricao', 'valor', 'categoria', 'data').where({ id: transactionId, usuario_id: id });

        if (details < 1) {
            return res.status(404).json({ mensagem: 'Transação inválida' });
        };

        return res.json(details);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };

};

module.exports = transactionDetails;
const connect = require("../../connect/connect");

const amountConsult = async (req, res) => {
    const { id } = req.userLogged;
    try {
        const value = await connect('saldo').where({ usuario_id: id }).select('valor');

        if (value.length < 1) {
            return res.status(404).json({ mensagem: 'Ainda não há saldo cadastrado' });
        };
        return res.json(value[0]);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

//confirmação de recebimento e alteração no saldo

//confirmação de pagamento e alteração no saldo

module.exports = amountConsult;
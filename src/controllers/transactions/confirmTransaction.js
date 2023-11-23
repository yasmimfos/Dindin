const connect = require("../../connect/connect");
const pendencies = require("./pendencies");

const confirmTransaction = async (req, res) => {
    const transactionId = req.params.id;
    const userId = req.userLogged.id;

    try {
        const transaction = await connect('transacoes').select('tipo', 'valor', 'pago').where({ id: transactionId }).first();
        const amount = await connect('saldo').select('valor').where({ usuario_id: userId }).first();

        if (transaction.pago == true) {
            return res.status(401).json({ mensagem: 'Essa transação já foi confirmada' })
        }

        if (transaction.tipo === 'saida') {
            if (amount.valor < transaction.valor) {
                return res.status(403).json({ mensagem: 'Saldo insuficiente' })
            }
            const newAmount = amount.valor - transaction.valor
            await connect('saldo').update({ valor: newAmount }).where({ usuario_id: userId });

            const pague = await pendencies(userId, newAmount);
            return res.json({ saldo: newAmount, pague });
        } else {
            const newAmount = amount.valor + transaction.valor
            await connect('saldo').update({ valor: newAmount }).where({ usuario_id: userId });

            const pague = pendencies(userId, newAmount);

            return res.json({ saldo: newAmount, pague })
        };

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    };
};

module.exports = confirmTransaction;
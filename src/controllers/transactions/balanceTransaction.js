const connect = require("../../connect/connect");

const balanceTransaction = async (req, res) => {
    const { id } = req.userLogged;

    try {
        const receive = await connect('transacoes').sum({ entrada: 'valor' }).where({ usuario_id: id, tipo: 'entrada' }).first();
        const payable = await connect('transacoes').sum({ saida: 'valor' }).where({ usuario_id: id, tipo: 'saida' }).first();

        const balanceTotal = {
            entrada: Number(receive.entrada) || 0,
            saida: Number(payable.saida) || 0
        };

        const receiveConfirm = await connect('transacoes').sum({ entrada: 'valor' }).where({ usuario_id: id, tipo: 'entrada', pago: true }).first();
        const payableConfirm = await connect('transacoes').sum({ saida: 'valor' }).where({ usuario_id: id, tipo: 'saida', pago: true }).first();

        const balanceConfirm = {
            entrada: Number(receiveConfirm.entrada) || 0,
            saida: Number(payableConfirm.saida) || 0
        };

        const receivePreview = await connect('transacoes').sum({ entrada: 'valor' }).where({ usuario_id: id, tipo: 'entrada', pago: false }).first();
        const payablePreview = await connect('transacoes').sum({ saida: 'valor' }).where({ usuario_id: id, tipo: 'saida', pago: false }).first();
        const balancePreview = {
            entrada: Number(receivePreview.entrada) || 0,
            saida: Number(payablePreview.saida) || 0
        };

        return res.status(200).json({
            Extrato: balanceTotal,
            Confirmadas: balanceConfirm,
            Previsões: balancePreview
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };
};

module.exports = balanceTransaction;
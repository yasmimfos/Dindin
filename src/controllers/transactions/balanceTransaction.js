const connect = require("../../connect/connect");

const balanceTransaction = async (req, res) => {
    const { id } = req.userLogged;

    try {
        const receive = await connect('transacoes').sum('valor').where({ usuario_id: id, tipo: 'entrada' });
        const payable = await connect('transacoes').sum('valor').where({ usuario_id: id, tipo: 'saida' });
        //somar os valores pra dar retorno
        const balance = {
            entrada: parseInt(receive),
            saida: parseInt(payable.valor)
        };

        return res.status(200).json(balance);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };
};

module.exports = balanceTransaction;
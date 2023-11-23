const connect = require('../connect/connect');

const pendencies = async (usuario_id, saldo) => {
    const transaction = await connect('transacoes').select('descricao', 'valor', 'categoria').where('valor', '<=', saldo).andWhere({ usuario_id, tipo: 'saida', pago: false });
    return transaction;
};

module.exports = pendencies;
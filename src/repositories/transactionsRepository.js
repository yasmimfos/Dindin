const connect = require('../configs/database/connect/connect');

const transactionsRepository = {
    create: async function (id, tipo, descricao, valor, data, categoria) {
        console.log(valor);
        return await connect('transacoes')
            .insert({ descricao, tipo, valor, categoria, data, usuario_id: id, pago: false })
            .returning('*');
    },
    getById: async function (transactionId) {
        return await connect('transacoes')
            .select('tipo', 'valor', 'pago')
            .where({ id: transactionId })
            .first();
    },
    confirm: async function (newAmount, userId) {
        return await connect('transacoes')
            .update({ valor: newAmount, pago: true })
            .where({ usuario_id: userId });
    },
    delete: async function (transactionId) {
        return await connect('transacoes')
            .delete()
            .where({ id: transactionId });
    },
    getByIdAndUser: async function (transactionId, id) {
        return await connect('transacoes')
            .where({ id: transactionId, usuario_id: id });
    },
    update: async function (descricao, tipo, valor, categoria, data, id, transactionId) {
        return await connect('transacoes')
            .update({ descricao, tipo, valor, categoria, data, usuario_id: id, pago: false })
            .where({ id: transactionId })
            .returning('*');
    },
    getByUser: async function (id) {
        return await connect('transacoes')
            .select('descricao', 'valor', 'categoria', 'data')
            .where({ usuario_id: id });
    },
    getByType: async function (id, type) {
        return await connect('transacoes').select('descricao', 'valor', 'categoria', 'data')
            .where({ usuario_id: id, tipo: type })
    },
    sum: async function (id, type) {
        return await connect('transacoes')
            .sum('valor')
            .where({ usuario_id: id, tipo: type })
    },
    sumByTypeAndPay: async function (id, type, boolean) {
        return await connect('transacoes')
            .sum('valor')
            .where({ usuario_id: id, tipo: type, pago: boolean })
    }
}
module.exports = transactionsRepository;
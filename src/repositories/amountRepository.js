const connect = require("../configs/database/connect/connect");

const amountRepository = {
    getAmount: async function (id) {
        return await connect('saldo').where({ usuario_id: id }).select('valor').first();
    },
    registerAmount: async function (id, valor) {
        return await connect('saldo').insert({ usuario_id: id, valor }).returning('valor');
    },
    updateAmount: async function (id, valor) {
        return await connect('saldo').update({ usuario_id: id, valor }).returning('valor');
    }
}

module.exports = amountRepository;
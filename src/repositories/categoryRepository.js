const connect = require("../configs/database/connect/connect");

const categoryRepository = {
    verify: async function (categoria) {
        return await connect('categorias').where({ categoria });
    },
    create: async function (categoria) {
        return await connect('categorias').insert({ categoria });
    },
    list: async function () {
        return await connect('categorias');
    },
    update: async function (categoria, nova_categoria) {
        return await connect('categorias').update({ categoria: nova_categoria }).where({ categoria });
    },
    delete: async function (categoria) {
        return await connect('categorias').delete().where({ categoria });
    }
}
module.exports = categoryRepository;
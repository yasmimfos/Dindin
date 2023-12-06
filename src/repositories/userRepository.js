const connect = require("../configs/database/connect/connect");

const userRepository = {
    getById: async function (id) {
        return await connect("usuarios").select("*").where("id", id).first();
    },
    create: async function (nome, email, senha, profissao, idade) {
        const [user] = await connect("usuarios")
            .returning("*")
            .insert({ nome, email, senha, profissao, idade });
        return user;
    },
    getByEmail: async function (email) {
        return await connect("usuarios")
            .select("*")
            .where({ email })
            .first();
    },
    update: async function (id, nome, email, senha, profissao, idade) {
        const [user] = await connect("usuarios")
            .where({ id })
            .returning("*")
            .update({ nome, email, senha, profissao, idade });
        return user;
    },
    delete: async function (id) {
        return await connect('usuarios').delete().where({ id });
    }
};

module.exports = userRepository;
const connect = require("../../connect/connect");

const createTransaction = async (req, res) => {
    const { id } = req.userLogged;
    const { tipo, descricao, valor, data, categoria } = req.body;

    try {
        const categoryValidation = await connect('categorias').where({ categoria });
        if (categoryValidation.length < 1) {
            await connect('categorias').insert({ categoria });
        };

        const register = await connect('transacoes').insert({ descricao, tipo, valor, categoria, data, usuario_id: id, pago: false }).returning('*');
        return res.status(201).json(register[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    };
};

module.exports = createTransaction;
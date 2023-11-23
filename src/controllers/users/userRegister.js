const bcrypt = require('bcrypt');
const connect = require('../../connect/connect');

const userRegister = async (req, res) => {
    const { nome, email, senha, profissao, idade } = req.body;

    try {
        const passwordHashed = await bcrypt.hash(senha, 10);

        const register = await connect('usuarios').insert({ nome, email, profissao, idade, senha: passwordHashed }).returning('*');

        const { senha: _, ...user } = register[0]

        return res.status(200).json(user);
    } catch (erro) {
        console.log(erro);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = userRegister;
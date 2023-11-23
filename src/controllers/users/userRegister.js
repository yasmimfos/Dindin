const bcrypt = require('bcrypt');
const connect = require('../../connect/connect');

const userRegister = async (req, res) => {
    const { nome, email, senha, profissao, idade } = req.body;

    try {
        const passwordHashed = await bcrypt.hash(senha, 10);

        const verifyEmail = await connect('usuarios').where({ email }).first();
        if (verifyEmail.length = 1) {
            return res.status(400).json({ mensagem: 'O email já foi cadastrado' });
        }
        const register = await connect('usuarios').insert({ nome, email, profissao, idade, senha: passwordHashed }).returning('*').first();

        const { senha: _, ...user } = register

        return res.status(200).json(user);
    } catch (erro) {
        console.log(erro);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
};

module.exports = userRegister;